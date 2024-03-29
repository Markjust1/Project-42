require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 2500;
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");



// Connecting mongoose db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database connected!"));

// let corsOptions = {
//   origin : ['http://localhost:3000'],
// }
app.use(cors());
app.use(bodyParser.json({limit: '2000kb'}));
app.use(express.json());

const usersRouter = require("./routes/users");
const itemsRouter = require("./routes/items");
app.use("/api/users", usersRouter);
app.use("/api/items", itemsRouter);


// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "X-Content-Type-Options",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.listen(port, () => {
  console.log(`Server has started on port ${port}.`);
});