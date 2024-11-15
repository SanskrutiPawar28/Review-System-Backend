import mongoose from "mongoose";

// Define an asynchronous function to connect to the MongoDB database
const dbConnect = async () => {
    try {

      // Attempt to connect to the database using the URL stored in the environment variable
      await mongoose.connect(process.env.MONGODB_URL);

      // If the connection is successful, log a success message
      console.log("MongoDB connected successfully");

    } catch (error) {
      
       // If the connection fails, log an error message along with the error details
      console.log("Connection failed", error);
    }
  };

  export default dbConnect;
  