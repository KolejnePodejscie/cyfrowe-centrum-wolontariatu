import sql from "../db.js";
import { DbOrg } from "../models/dbModels.js";

export async function verifyOrg(orgId: string) {
    await sql`UPDATE organisations SET isverified = True WHERE id = ${orgId};`;
}

export async function getAllOrgs() {
    return await sql<DbOrg[]>`SELECT * FROM organisations;`;
}
