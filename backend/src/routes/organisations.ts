import { Router } from "express";
import { isAdmin, requireAuth } from "../auth.js";
import * as orgController from "../controllers/orgController.js";
import { Organisation } from "../models/apiModels.js";

const router = Router();

router.get("/", async (req, res) => {
    const orgs = await orgController.getAllOrgs();
    res.json(orgs);
});

router.post("/", requireAuth, async (req, res) => {
    const org = req.body as Organisation;
    await orgController.createOrg(org);
});

router.patch("/:orgId", requireAuth, async (req, res) => {
    const orgId = req.params.orgId;
    try {
        const valid = await isAdmin(req.session.data.identity.id);
        if (!valid) {
            res.sendStatus(403);
            return;
        }
    } catch (err) {
        res.sendStatus(404);
        return;
    }

    orgController.verifyOrg(orgId);

    res.sendStatus(204);
});

router.get("/:orgId/events", async (req, res) => {
    const orgId = req.params.orgId;
    const events = Array.from(await orgController.getOrgEvents(orgId));
    res.json(events);
});

export default router;
