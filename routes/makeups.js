
   
import { Router } from "express";
import * as controllers from "../controllers/makeups.js";

const router = Router();

router.get("/", controllers.getMakeup);
router.get("/:id", controllers.getMakeups);
router.post("/", controllers.createMakeup);
router.put("/:id", controllers.updateMakeup);
router.delete("/:id", controllers.deleteMakeup);

export default router;