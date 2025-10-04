import { Router } from "express";
import { getUserTasksFromEvent } from "../controllers/eventController.js";

const router = Router();

router.get("/", (req, res) => {});

router.post("/", (req, res) => {});

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
router.get("/:eventId/users", (req, res) => {
    const eventId = req.params.eventId;
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
