import db from './db/connection.js';
import express from 'express';
import cors from 'cors';
import routes from './routes/makeups.js'
// import bodyParser from 'body-parser';
// import makeupsRoutes from "./routes/makeups.js";

// const router = Router();
const app = express();

// Middleware
app.use(express.json()) // Lets us send and receive only json
app.use(cors()) // Allows front-end to consume our api

// app.use(bodyParser.json());

app.get("/", (req, res) => res.send("This is the api root!"));
app.use('/makeup', routes);

const PORT = process.env.PORT || 3000;
// mongoose.set('strictQuery', false)

// mongoose.connect('mongodb://127.0.0.1:27017/api-project', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB Connected...'))
// .catch(err => console.log(err));

// app.listen(5000, () => {
//   console.log('Server started on port 5000');
// });

db.on("connected", () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})


// router.use("/makeups", makeupsRoutes);


// db.off("disconnected", () => {

// })



export default app;