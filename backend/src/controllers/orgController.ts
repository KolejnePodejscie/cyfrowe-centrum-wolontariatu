import sql from "../db.js";
import { DbOrg } from "../models/dbModels.js";
import { Event } from "../models/apiModels.js";

export async function verifyOrg(orgId: string) {
    await sql`UPDATE organisations SET isverified = True WHERE id = ${orgId};`;
}

export async function getAllOrgs() {
    return await sql<
        DbOrg[]
    >`SELECT * FROM organisations WHERE isverified = True;`;
}

export async function createOrg(org: DbOrg) {
    await sql`
INSERT INTO organisations (name, description, profileimage, backgroundimage, contactinfo)
VALUES (${org.name}, ${org.description}, ${org.profileImage}, ${org.backgroundImage}, ${org.contactInfo});`;
}

export async function getOrgEvents(orgId: string) {
    const events = await sql<
        Event[]
    >`SELECT * FROM events WHERE organisationId = ${orgId}`;

    return events;
}

export async function getUserEvents(userId: string) {
    const userData =
        await sql`SELECT id as UserId, description, displayName FROM users WHERE id = ${userId}`;
    // const userDisplayName: string = "";

    if (!userData.length) {
        throw new Error("User not found");
    }

    const userEvents = await sql<
        Event[]
    >`SELECT e.id, e.title, e.description, e.latitude, e.longitude, e.organisationId, e.eventImage, e.startDate, e.endDate FROM (events as e JOIN eventTasks as et ON e.Id = et.eventId) 
    JOIN taskAssignment as ta ON et.Id = ta.taskId
    WHERE ta.volounterId = ${userId}`;

    return userEvents;
}
