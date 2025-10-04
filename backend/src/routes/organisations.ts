import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:orgId", (req, res) => {
    const orgId = req.params.orgId;
    res.sendStatus(418);
});

router.get("/:orgId/events", (req, res) => {
    const orgId = req.params.orgId;
});

export default router;
