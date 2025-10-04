import { Router } from "express";
import { isAdmin, requireAuth } from "../auth.js";
import * as userController from "../controllers/userController.js";
import { upload } from "../upload.js";
import { CreateUserData } from "../requests.js";
import { DbUser } from "../models/dbModels.js";

const router = Router();

router.get("/", requireAuth, async (req, res) => {
    if (await isAdmin(req.session.data.identity?.id)) {
        try {
            const users = await userController.getUsers();
            res.json(users);
        } catch (err) {
            res.sendStatus(404);
        }
    } else {
        res.sendStatus(403);
    }
});

router.post("/", requireAuth, upload.single("image"), async (req, res) => {
    const body = JSON.parse(req.body.userData) as CreateUserData;

    const fileId = req.file?.filename;
    const user: DbUser = {
        id: req.session.data.identity.id,
        description: body.description,
        displayName: body.displayName,
        isAdult: false,
        profileImage: fileId,
        email: req.session.data.identity.traits.email,
    };

    await userController.createUser(user);
    res.sendStatus(201);
});

// Get user past events without tasks
router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const userEvents = Array.from(
            await userController.getUserEvents(userId)
        );
        res.json(userEvents);
    } catch {
        res.sendStatus(404);
    }
});

export default router;
