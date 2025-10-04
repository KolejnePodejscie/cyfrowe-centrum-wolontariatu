import { CreateEventData } from "../requests.js";
import { Task, UserMinimal } from "../models/apiModels.js";
import sql from "../db.js";

export async function getUserTasksFromEvent(userId: string, eventId: string) {
    const userTasks = await sql<
        Task[]
    >`SELECT t.id, t.description, t.goal as learningGoal 
    FROM eventtasks as t JOIN taskassignment as ta ON t.id = ta.taskId 
    WHERE ta.volounteerId = ${userId} AND t.eventId = ${eventId}`;
    return userTasks as Task[];
}
export async function createEvent(event: CreateEventData, images: string[]) {
    await sql.begin(async (tx) => {
        const res = await tx`
INSERT INTO events (title, description, latitude, longitude, startDate, endDate, organisationid)
VALUES (${event.title}, ${event.description}, ${event.latitude}, ${event.longitude}, ${event.startDate}, ${event.endDate}, ${event.organisationId})
RETURNING id;
`;
        const eventId = res[0].id;

        for (const imageId of images) {
            await tx`INSERT INTO eventimages VALUES (${eventId}, ${imageId});`;
        }
    });
}

export async function getEventVolunteerss(eventId: string) {
    const eventVolunteers = sql<
        UserMinimal[]
    >`SELECT u.id, u.displayName FROM users as u
    JOIN eventVolunteer as ev ON u.id = ev.volunteerId
    WHERE ev.eventId = ${eventId};
`;
    return eventVolunteers;
}
