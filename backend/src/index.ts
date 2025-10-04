import { app } from "./server.ts";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.PORT}`);
});
