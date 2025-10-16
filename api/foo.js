import {
  createFile,
  getFolders,
  getFolderByIdWithFiles,
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

router.route("/folders/:id/files").post(async (req, res) => {
  const { id } = req.params;

  if (!req.body) {
    return res.status(400).send("Body required");
  }

  const { name, size } = req.body;

  if (!name || !size) {
    return res.status(400).send("Body requires name and size");
  }

  try {
    const folder = await getFolderByIdWithFiles({ id });

    if (!folder) {
      return res.status(404).send("Folder does not exist");
    }

    const response = await createFile({ name, size, id });
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.route("/folders/:id").get(async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getFolderByIdWithFiles({ id });

    if (!response) {
      return res.status(404).send("Folder does not exist");
    }
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
