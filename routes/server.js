import express from 'express';
import bodyParser from 'body-parser';
import mongoose from '../db/connection.js';
import makeupsRoute from './makeups.js';

const app = express();

app.use(bodyParser.json());

app.use('/api-project/makeups', makeupsRoute);

mongoose.connect('mongodb://localhost/api-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
