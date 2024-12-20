import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Restaurant",
    })
    .then(() => {
      console.log("Connected to database Successfully!!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database ${err}`);
    });
};

export default dbConnection;
