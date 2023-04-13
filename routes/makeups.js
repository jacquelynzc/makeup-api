
import express from "express";
import * as controllers from "../controllers/makeups.js";

const router = express.Router();

router.get("/", controllers.getMakeups);
router.get("/:id", controllers.getMakeup);
router.get("/cat/:productType", controllers.getMakeupByType);
router.get("/brand/:brand", controllers.getMakeupByBrand);
router.post("/", controllers.createMakeup);
router.put("/:id", controllers.updateMakeup);
router.delete("/:id", controllers.deleteMakeup);

export default router;