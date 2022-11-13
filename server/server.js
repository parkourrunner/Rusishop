import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app.js";
import "./api/index.js";
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB Connected"))
  .catch((err) => {
    console.log(err);
  });

app.listen(3001, () => {
  console.log("Listening to 3001");
});
