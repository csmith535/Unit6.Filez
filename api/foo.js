import express from "express";
const router = express.Router();
export default router;

router.route("/files");

router.route("/folders/:id/files")

router.route("/folders/:id");

router.route("/folders");