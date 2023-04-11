import { Router } from "express";
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import makeupRoutes from "./routes/makeups.js";

const router = Router();
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/makeup', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(bodyParser.json());

router.get("/", (req, res) => res.send("This is the api root!"));
router.use("/makeup", makeupRoutes);






export default router;