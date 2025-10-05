import { CreateEventData } from "../requests.js";
import {
    EventWithVolounteers,
    Task,
    Event,
    UserMinimal,
    Volounteer,
    image,
} from "../models/apiModels.js";
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
    const eventVolunteers = (await sql<
        Volounteer[]
    >`SELECT u.id, u.displayName, ev.isAccepted FROM users as u
    JOIN eventVolunteer as ev ON u.id = ev.volunteerId
    WHERE ev.eventId = ${eventId};
`) as Volounteer[];
    return eventVolunteers;
}

export async function getEventTasks(eventId: string) {
    const eventTasks = await sql<
        Task[]
    >`SELECT t.id, t.description, t.goal as learningGoal FROM tasks as t WHERE t.eventId = ${eventId};
`;
    return eventTasks as Task[];
}

export async function getEventData(eventId: string) {
    const eventVolounteers = await getEventVolunteerss(eventId);
    type strarr = string[];
    const eventImages = (await sql<
        image[]
    >`SELECT imagename FROM eventImages as ei WHERE ei.eventid = ${eventId}`) as image[];

    let eventInfo = (await sql<
        Event[]
    >`SELECT e.id, e.title, e.description, e.latitude, e.longitude, e.organisationId, e.startDate, e.endDate FROM events as e
    WHERE e.id = ${eventId}`) as Event[];
    if (!eventInfo.length) {
        throw new Error("Event does not exists");
    }
    let eventData: EventWithVolounteers = eventInfo[0] as EventWithVolounteers;
    eventData.volounteers = eventVolounteers;
    eventData.imageUrls = eventImages;

    return eventData;
}
