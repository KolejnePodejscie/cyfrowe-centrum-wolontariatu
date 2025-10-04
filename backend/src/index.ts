import { logger } from "./logger.js";
import { app } from "./server.js";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () => {
    logger.info(`Running on ${process.env.PORT}`);
});
