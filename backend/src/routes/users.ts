import { Router } from "express";
import { requireAuth } from "../auth.js";

const router = Router();

router.get("/", requireAuth, (req, res) => {
    res.sendStatus(418);
});

router.post("/", requireAuth, (req, res) => {
    const body = JSON.parse(req.body);
});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
});

router.put("/:userId", (req, res) => {
    const userId = req.params.userId;
    res.sendStatus(418);
});

router.get("/:userId/events", (req, res) => {});

export default router;
