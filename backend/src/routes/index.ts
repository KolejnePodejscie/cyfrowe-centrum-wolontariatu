import { Router } from "express";
import userRouter from "./users.js";
import orgRouter from "./organisations.js";
import eventRouter from "./events.js";

const router = Router();

router.use("/users", userRouter);
router.use("/organisations", orgRouter);
router.use("/events", eventRouter);

export default router;
