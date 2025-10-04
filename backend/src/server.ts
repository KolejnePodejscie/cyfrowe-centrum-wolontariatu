import express, { type Express } from "express";

const app: Express = express();

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));

// Request logging
// app.use(requestLogger);

// Routes
// app.use("/health-check", healthCheckRouter);
// app.use("/users", userRouter);

// Swagger UI
// app.use(openAPIRouter);

// Error handlers
// app.use(errorHandler());

export { app };
