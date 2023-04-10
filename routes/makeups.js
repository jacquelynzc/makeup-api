
   
import { Router } from "express";
import * as controllers from "../controllers/makeups.js";

const router = Router();

router.get("/", controllers.getMakeup);
router.get("/:id", controllers.getMakeups);
router.post("/", controllers.createMakeups);
router.put("/:id", controllers.updateMakeups);
router.delete("/:id", controllers.deleteMakeups);

export default router;