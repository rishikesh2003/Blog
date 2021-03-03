const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());

const emailRouter = require("./Routes/EmailRoute");
app.use("/api/emails", emailRouter);

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection to database successfully");
  } catch (err) {
    console.log(err);
  }
})();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `The server is running on ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
