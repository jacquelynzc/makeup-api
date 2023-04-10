import mongoose from "mongoose";
import chalk from "chalk";

const DB_URI = 'mongodb://localhost:27017/api-project';

const PORT = process.env.PORT || 5000;

const MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/api-project";

  mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB!'))
    .catch((error) => {
        console.error('Error connecting to MongoDB: ', error.message);
        process.exit(1);
    });
    
    mongoose.connection.once("open", () => {
        console.log("Connected to MongoDB!");
      });
      
      mongoose.connection.on("disconnected", () => {
        console.log(chalk.bold("Disconnected from MongoDB!"));
      });
      
      mongoose.connection.on("error", (error) => {
        console.error(chalk.red(`MongoDB connection error: ${error}`));
      });
      
      process.on("SIGINT", () => {
        mongoose.connection.close(() => {
          console.log("MongoDB connection closed!");
          process.exit(0);
        });
      });


      
export default mongoose.connection;