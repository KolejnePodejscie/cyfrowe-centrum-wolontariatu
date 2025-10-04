import sql from "../db.js";
import { DbOrg } from "../models/dbModels.js";

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

export async function getOrgEvents(orgId: string) {}
