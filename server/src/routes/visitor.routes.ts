import { Router } from "express";
import createVisitor from "../controllers/visitor.controller.js";


const router = Router()

router.post("/send-visitor", createVisitor)

export default router