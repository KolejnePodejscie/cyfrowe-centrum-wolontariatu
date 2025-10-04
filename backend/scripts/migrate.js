import shift from 'postgres-shift';
import postgres from 'postgres';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";


const env = dotenv.config();
dotenvExpand.expand(env);

// const {
//     DB_HOST,
//     DB_PORT,
//     DB_NAME,
//     ADMIN_DB_USER,
//     ADMIN_DB_PASSWORD,
// } = process.env;

// export const sql = postgres({
//     host: DB_HOST,
//     port: Number(DB_PORT),
//     database: DB_NAME,
//     user: ADMIN_DB_USER,
//     pass: ADMIN_DB_PASSWORD,
//     idle_timeout: 1,
// });

console.log(process.env.DB_URL);

export const sql = postgres(process.env.DB_URL);

shift({
    sql,
    path: fileURLToPath(new URL('.././migrations', import.meta.url)),
    before: ({ migration_id, name }) => {
        console.log('Migrating', migration_id, name);
    },
})
    .then(() => console.log('All good'))
    .catch((err) => {
        console.error('Failed', err);
        process.exit(1);
    });