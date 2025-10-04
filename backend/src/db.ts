import postgres from "postgres";

const db = postgres(process.env.DB_URL);

export { db };
