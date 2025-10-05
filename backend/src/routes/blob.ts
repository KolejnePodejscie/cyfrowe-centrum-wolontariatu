import { Router } from "express";
import path from "node:path";
import fs from "fs";
import { fileTypeFromFile } from "file-type";

const router = Router();

router.get("/:blobId", async (req, res) => {
    const blobId = req.params.blobId;
    const filePath = path.resolve("uploads", blobId);

    if (!fs.existsSync(filePath)) {
        return res.status(404).send("File not found");
    }

    // Detect MIME type dynamically
    const type = await fileTypeFromFile(filePath);

    if (type) {
        res.setHeader("Content-Type", type.mime);
    } else {
        // fallback for unknown types
        res.setHeader("Content-Type", "application/octet-stream");
    }

    fs.createReadStream(filePath).pipe(res);
});

export default router;
