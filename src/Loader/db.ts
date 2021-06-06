import mongoose from "mongoose";
import config from "../config";
import Product from "../models/list";


const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("Mongoose Connected ...");
    Product.createCollection().then(function(collection) {
      console.log('Product Collection is created!');
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;