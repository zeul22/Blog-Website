import dotenv from "dotenv";
import connectDB from "./db/dbconfig.js";
import {app} from "./app.js";

dotenv.config({
  path: "../.env",
});

const port = process.env.PORT;
// console.log(port);
// console.log(process.env.CORS_ORIGIN);

connectDB()
  .then(() => {
    app.listen(port || 8080, () => {
      console.log(`Server running on ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Server connection failed :${err}`);
  });
