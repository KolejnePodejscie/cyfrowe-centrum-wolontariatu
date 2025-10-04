import sql from "../db.js";

export async function verifyOrg(orgId: string) {
    await sql`UPDATE organisations SET isverified = True WHERE id = ${orgId};`;
}
