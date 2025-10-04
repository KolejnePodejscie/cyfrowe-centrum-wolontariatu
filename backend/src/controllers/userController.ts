import sql from "../db.js";
import { logger } from "../logger.js";
import { DbUser } from "../models/dbModels.js";
import { UserHoursWorked } from "../models/apiModels.js";

export async function createUser(user: DbUser) {
    await sql`
INSERT INTO users (displayname, description, email, profileimage) 
VALUES (${user.displayName}, ${user.description}, ${user.email}, ${user.profileImage});`;
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
SELECT u.id, u.displayName, SUM(ta.hoursWorked) FROM users as u JOIN taskAssignment as ta ON u.id = ta.volounteerId`;
    if (!users.length) throw new Error("Not found");
    return users;
}
