import { Router } from "express";
import makeupsRoutes from "./makeups.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/makeups", makeupsRoutes);

export default router;