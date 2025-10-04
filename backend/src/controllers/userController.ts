import db from "../db.js";
import { DbUser } from "../models/dbModels.js";

export async function createUser(data: DbUser) {
    await db`INSERT INTO users (displayname, description, email, profileimage) VALUES ('${data.displayName}', '${data.description}', '${data.email}', '${data.profileImage}');`;
}
