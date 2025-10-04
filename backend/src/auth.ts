import sdk from "@ory/kratos-client";
import { Request, Response, NextFunction } from "express";
import { logger } from "./logger.js";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const env = dotenv.config();
dotenvExpand.expand(env);

const COOKIE =
    "csrf_token_2a80315e3bf95704cd99cc20282ab03b66a4b14d7089f770c675cb8483d56cca=vrz0dbb4IbakXrpW5f1iuXOn/sYRmkRFPUoKUrnqmp0=; ory_kratos_session=MTc1OTU3MDEzNHxvSUFJR1RpcjU3bHh5SjBTejBxN3E2blB4UE9nbVVLWFZ4ZzNpeG5xdWVpcUk3S3lLY2hlS3ZwUTRlTjV0Y0J3dm40dHZoS1c4VkhORmtKOFF3SlZfZHZTdXpjb3R5bVdwZ1p4aWlOaUU1MjhWOGx3MWdNTGdjMl82ZFlCeWUzOUJtRzlyV1hlSW5IODlxX2N1Mkp2NnZXQzJaX1lRVlVla01xODBSNzlwT2ktbTVoQ0w3VW5lYXRlLWlrR0xOcUx0ZGhBN3IzSk9aWEhPZEYwdEpLekdVS2RvRFdKNFRqMjZHb3l5VUZycjZXNGlpaWVEWFlkejRwdVdzTHNaa2dJdGRaMTh1c0d2OGRCTnJjcW9HTDZ8SRD9lfD45dUC3Hoji_MKDzdN0AD5HXrn0TM-z8ttlNg=";

const ory = new sdk.FrontendApi(
    new sdk.Configuration({
        basePath: process.env.ORY_URL,
    })
);

export const requireAuth = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const session = await ory.toSession({ cookie: COOKIE });
        // @ts-expect-error
        req.session = session;
        next();
    } catch (error) {
        logger.error(error);
        res.sendStatus(401);
    }
};
