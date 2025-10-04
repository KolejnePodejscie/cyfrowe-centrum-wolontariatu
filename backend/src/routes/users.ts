import { Router } from "express";
import { isAdmin, requireAuth } from "../auth.js";
import { getUsers, getUserEvents } from "../controllers/userController.js";

const router = Router();

router.get("/", requireAuth, async (req, res) => {
    if (await isAdmin(req.session.data.identity?.id)) {
        try {
            const users = await getUsers();
            res.json(users);
        } catch (err) {
            res.sendStatus(404);
        }
    } else {
        res.sendStatus(403);
    }
});

router.post("/", requireAuth, (req, res) => {
    const body = JSON.parse(req.body);
});

// Get user past events withput tasks
router.get("/:userId", async (req, res) => {
    const userEvents = await getUserEvents(req.session.data.identity?.id);
    const userId = req.params.userId;
    try {
        const userEvents = await getUserEvents(userId);
        res.json(userEvents);
    } catch {
        res.sendStatus(404);
    }
});

router.put("/:userId", (req, res) => {
    const userId = req.params.userId;
    res.sendStatus(418);
});

router.get("/:userId/events", (req, res) => {});

export default router;
