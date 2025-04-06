

const mongoose = require("mongoose");

const connectDb = () => {
  mongoose.connect(process.env.DB_CONNECT, {
    }).then(() => {
      console.log("Connected to MongoDB");
    }).catch((err) => {
      console.error("Error connecting to MongoDB:", err.message);
    });
};


module.exports = connectDb;