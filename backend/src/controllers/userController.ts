import sql from "../db.js";
import { logger } from "../logger.js";
import { DbTask, DbUser } from "../models/dbModels.js";
import { Event, UserEvents, UserHoursWorked } from "../models/apiModels.js";

export async function createUser(user: DbUser) {
    await sql`
INSERT INTO users (id, displayName, description, email, profileimage, isadmin) 
VALUES (${user.id}, ${user.displayName}, ${user.description}, ${user.email}, ${user.profileImage ?? null}, ${true});`;
}

export async function ownsOrg(userId: string, orgId: string) {
    const rows = await sql`
SELECT COUNT (*) FROM organisationmanagers as om 
WHERE om.managerid = ${userId} AND om.organisationid = ${orgId};`;

    const count = rows[0][0] as number;
    logger.info("count: " + count);

    return count === 1;
}

// TODO add filtering by daterange
export async function getUsers() {
    const users = await sql<UserHoursWorked[]>`
SELECT u.id, u.displayName, SUM(ta.hoursWorked) as hours FROM users as u JOIN taskAssignment as ta ON u.id = ta.volounteerId GROUP BY u.id`;
    return users;
}

export async function getReport() {
    return await sql`
SELECT u.id, u.displayName, u.email, SUM(ta.hoursWorked) FROM users as u JOIN taskAssignment as ta ON u.id = ta.volounteerId GROUP BY u.id`;
}

export async function getUserEvents(userId: string) {
    const userData =
        await sql`SELECT id as UserId, description, displayName FROM users WHERE id = ${userId}`;
    // const userdisplayName: string = "";

    if (!userData.length) {
        throw new Error("User not found");
    }

    const userEvents = await sql<
        Event[]
    >`SELECT e.id, e.title, e.description, e.latitude, e.longitude, e.organisationId, e.startDate, e.endDate FROM (events as e JOIN eventTasks as et ON e.Id = et.eventId) 
    JOIN taskAssignment as ta ON et.Id = ta.taskId
    WHERE ta.volounterId = ${userId}`;

    return userEvents;
}

export async function createEventTask(task: DbTask) {
    await sql`
        INSERT INTO eventTasks (eventId, description, goal)
        VALUES (${task.eventid}, ${task.description}, ${task.goal});
        `;
}
