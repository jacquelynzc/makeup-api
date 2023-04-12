import { Router } from "express";
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import makeupsRoutes from "./routes/makeups.js";

const router = Router();
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/api-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// app.listen(5000, () => {
//   console.log('Server started on port 5000');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(bodyParser.json());

app.use('/api-project/makeups', makeupsRoutes);

router.get("/", (req, res) => res.send("This is the api root!"));
router.use("/makeups", makeupsRoutes);






export default router;