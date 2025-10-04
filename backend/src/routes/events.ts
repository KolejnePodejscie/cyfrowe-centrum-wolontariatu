import { Router } from "express";
import {
    getEventVolunteerss,
    getUserTasksFromEvent,
} from "../controllers/eventController.js";
import { requireAuth } from "../auth.js";
import { upload } from "../upload.js";
import { CreateEventData } from "../requests.js";
import * as eventController from "../controllers/eventController.js";

const router = Router();

router.get("/", (req, res) => {});

router.post("/", requireAuth, upload.array("image", 2), (req, res) => {
    const fileIds = [];
    for (const file of req.files as Express.Multer.File[]) {
        fileIds.push(file.filename);
    }

    const eventData = JSON.parse(req.body.eventData) as CreateEventData;
    eventController.createEvent(eventData, fileIds);

    res.sendStatus(201);
});

router.get("/:eventId", (req, res) => {
    const eventId = req.params.eventId;
});

router.put("/:eventId", (req, res) => {
    const eventId = req.params.eventId;
});

//  ----------/tasks ----------
router.get("/:eventId/tasks", (req, res) => {
    const eventId = req.params.eventId;
});

router.post("/:eventId/tasks", (req, res) => {
    const eventId = req.params.eventId;
});

router.post("/:eventId/tasks/:taskId", (req, res) => {
    const eventId = req.params.eventId;
    const taskId = req.params.taskId;
});

router.get("/:eventId/tasks/:taskId", (req, res) => {
    const eventId = req.params.eventId;
    const taskId = req.params.taskId;
});

//  ----------/users ----------
// Get users for event
router.get("/:eventId/users", async (req, res) => {
    const eventId = req.params.eventId;
    const eventVolunteers = getEventVolunteerss(eventId);
    res.json(eventVolunteers);
});

router.put("/:eventId/users", (req, res) => {
    const eventId = req.params.eventId;
});

router.post("/:eventId/users/:userId", (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.params.userId;
});

// Get user tasks from event
router.get("/:eventId/users/:userId", (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.params.userId;
    const userTasks = getUserTasksFromEvent(userId, eventId);
    res.json(userTasks);
});

// ---------- /topics ----------
router.get("/:eventId/topics", (req, res) => {
    const eventId = req.params.eventId;
});

router.post("/:eventId/topics", (req, res) => {
    const eventId = req.params.eventId;
});

router.get("/:eventId/topics/:topicId", (req, res) => {
    const eventId = req.params.eventId;
    const topicId = req.params.topicId;
});

router.post("/:eventId/topics/comments", (req, res) => {
    const eventId = req.params.eventId;
});

export default router;
