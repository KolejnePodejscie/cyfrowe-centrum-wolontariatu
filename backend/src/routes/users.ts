import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {});

router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
});

router.put("/:userId", (req, res) => {
    const userId = req.params.userId;
});

export default router;
