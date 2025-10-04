import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:orgId", (req, res) => {
    const orgId = req.params.orgId;
});

export default router;
