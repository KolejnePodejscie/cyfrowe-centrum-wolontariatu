import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:orgId", (req, res) => {
    const orgId = req.params.orgId;
    res.sendStatus(418);
});

export default router;
