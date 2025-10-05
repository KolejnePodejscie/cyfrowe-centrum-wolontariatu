import express, { type Express } from "express";
import { logger } from "./logger.js";
import { pinoHttp } from "pino-http";
import router from "./routes/index.js";
import { errorHandler, notFound } from "./middleware.js";

const app: Express = express();

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(pinoHttp({ logger: logger }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
// app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));

app.use("/", router);

app.get("/search", async (req, res) => {
    const q = req.query.q;
    const url = `https://nominatim.openstreetmap.org/search?q=${q}&format=json&addressdetails=1`;

    const response = await fetch(url, {
        headers: { "User-Agent": "YourAppName/1.0" },
    });

    const data = await response.json();
    res.json(data);
});

app.use(notFound);
app.use(errorHandler);

export { app };
