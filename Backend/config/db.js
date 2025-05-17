const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("connected to the MongoDB");
  } catch (err) {
    console.error("Some error occured in connecting MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
