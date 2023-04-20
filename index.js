import db from './db/connection.js';
import express from 'express';
import cors from 'cors';
import routes from './routes/makeups.js'

const app = express();

// Middleware
app.use(express.json()) // Lets us send and receive only json
app.use(cors()) // Allows front-end to consume our api


app.get("/", (req, res) => res.send("you've reached the root, -beeeeeeeep-"));
app.use('/makeup', routes);

const PORT = process.env.PORT || 3000;

db.on("connected", () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

export default app;