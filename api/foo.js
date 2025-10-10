import { getFiles, getFolders, getFolderById } from "#db/queries";
import express from "express";
const router = express.Router();
export default router;

router.route("/files");

router.route("/folders/:id/files")

router.route("/folders/:id");

router.route("/folders").get(async (req, res) => {
    try {
        const response = await getFolders();
        res.send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});