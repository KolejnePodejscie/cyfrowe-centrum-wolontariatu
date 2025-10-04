import sql from "../db.js";
import { logger } from "../logger.js";
import { DbUser } from "../models/dbModels.js";

export async function createUser(data: DbUser) {
    await sql`
INSERT INTO users (displayname, description, email, profileimage) 
VALUES (${data.displayName}, ${data.description}, ${data.email}, ${data.profileImage});`;
}

export async function ownsOrg(userId: string, orgId: string) {
    const rows = await sql`
SELECT COUNT (*) FROM organisationmanagers as om 
WHERE om.managerid = ${userId} AND om.organisationid = ${orgId};`;

    const count = rows[0][0] as number;
    logger.info("count: " + count);

    return count === 1;
}
