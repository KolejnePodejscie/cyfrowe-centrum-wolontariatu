import { logger } from "./logger";
import { app } from "./server";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () => {
    logger.info(`Running on ${process.env.PORT}`);
});
