import sdk from "@ory/kratos-client";
import { Request, Response, NextFunction } from "express";
import { logger } from "./logger.js";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import axios from "axios";
import https from "node:https";

const env = dotenv.config();
dotenvExpand.expand(env);

const client = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
});
const ory = new sdk.FrontendApi(
    new sdk.Configuration({
        basePath: process.env.ORY_URL,
    }),
    undefined,
    client
);

export const requireAuth = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const session = await ory.toSession({
            cookie: process.env.MOCK_COOKIE,
        });
        // @ts-expect-error
        req.session = session;
        next();
    } catch (error) {
        logger.error(error);
        res.sendStatus(401);
    }
};
