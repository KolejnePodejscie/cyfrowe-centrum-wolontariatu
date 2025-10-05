import { logger } from "./logger.js";
import { app } from "./server.js";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const env = dotenv.config();
dotenvExpand.expand(env);
console.log(process.env.DB_URL);

app.listen(process.env.PORT, () => {
    logger.info(`Running on ${process.env.PORT}`);
});
