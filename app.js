import router from "#api/foo";
import express from "express";
const app = express();
export default app;

app.use(express.json());

app.use("/", router);
