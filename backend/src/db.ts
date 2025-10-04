import postgres from "postgres";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const env = dotenv.config();
dotenvExpand.expand(env);

const db = postgres(process.env.DB_URL);

export default db;
