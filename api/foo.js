import {
  getFiles,
  getFolders,
  getFolderById,
  getFilesWithFolders,
} from "#db/queries";
import express from "express";
const router = express.Router();
export default router;

router.route("/files").get(async (req, res) => {
  try {
    const response = await getFilesWithFolders();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.route("/folders/:id/files");

router.route("/folders/:id").get(async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getFolderById(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.route("/folders").get(async (req, res) => {
  try {
    const response = await getFolders();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});
