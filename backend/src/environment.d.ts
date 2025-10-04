import type { AxiosResponse } from "axios";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production";
            PORT: number;
            DB_PASS: string;
            DB_USER: string;
            DB_NAME: string;
            DB_URL: string;
            ORY_URL: string;
            MOCK_COOKIE: string;
        }
    }

    namespace Express {
        export interface Request {
            session: AxiosResponse<sdk.Session, any, {}>;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
