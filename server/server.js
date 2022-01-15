const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const gamesRoutes = require("../server/routes/games");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//   console.log("Incoming request");
//   next();
// });

// app.use((req, res, next) => {
//   console.log(`${req.method} request to ${req.path}`);
//   next();
// });

// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello from server!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});
