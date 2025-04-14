import { Router } from "express";
import { getAllPersons } from "../controllers";

const router = Router();

router.get("/", getAllPersons);

export default router;