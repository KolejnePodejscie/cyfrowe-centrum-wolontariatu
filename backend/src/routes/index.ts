import { Router } from "express";
import userRouter from "./users.js";
import orgRouter from "./organisations.js";
import eventRouter from "./events.js";
import blobsRouter from "./blob.js";

const router = Router();

router.use("/users", userRouter);
router.use("/organisations", orgRouter);
router.use("/events", eventRouter);
router.use("/blobs", blobsRouter);

export default router;
