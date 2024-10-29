import { Router } from "express";
import { getTasks, createTask } from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.post("/create", createTask);

export default router;
