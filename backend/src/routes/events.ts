import { Router } from "express";
import {
    getEventTasks,
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

// Get event info
router.get("/:eventId", (req, res) => {
    const eventId = req.params.eventId;
});

// Edit event
router.put("/:eventId", (req, res) => {
    const eventId = req.params.eventId;
});

//  ----------/tasks ----------
// Get event tasks
router.get("/:eventId/tasks", (req, res) => {
    const eventId = req.params.eventId;
    const eventTasks = getEventTasks(eventId);
    res.json(eventTasks);
});

// Add task to event
router.post("/:eventId/tasks", (req, res) => {
    const eventId = req.params.eventId;
});

// Get users assigned to task
router.get("/:eventId/tasks/:taskId", (req, res) => {
    const eventId = req.params.eventId;
    const taskId = req.params.taskId;
});

// Assign user to task
router.post("/:eventId/tasks/:taskId/:userId", (req, res) => {
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

// change user to accepted or delete from event
router.put("/:eventId/users/:userId", (req, res) => {
    const eventId = req.params.eventId;
    const userId = req.params.userId;
});

// Add user to event pending
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

export default router;
