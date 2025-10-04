import { Router } from "express";
import { isAdmin, requireAuth } from "../auth.js";
import * as userController from "../controllers/userController.js";
import * as orgController from "../controllers/orgController.js";

const router = Router();

router.get("/", async (req, res) => {
    const orgs = await orgController.getAllOrgs();
    res.json(orgs);
});

router.post("/", requireAuth, (req, res) => {});

router.patch("/:orgId", async (req, res) => {
    const orgId = req.params.orgId;
    // try {
    //     const valid = await userController.ownsOrg(
    //         req.session.data.identity!.id,
    //         orgId
    //     );
    //     if (!valid) {
    //         res.sendStatus(401);
    //         return;
    //     }
    // } catch (err) {
    //     res.sendStatus(404);
    //     return;
    // }

    orgController.verifyOrg(orgId);

    res.sendStatus(204);
});

router.get("/:orgId/events", (req, res) => {
    const orgId = req.params.orgId;
});

export default router;
