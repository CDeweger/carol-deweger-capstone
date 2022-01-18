const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const shelterRoute = require("./routes/shelter");
const foodProgramRoute = require("./routes/foodProgram");
const firstNationRoute = require("./routes/firstNation");
const singupAndLoginRoute = require("./routes/singupAndLogin");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// app.use(express.static("public"));

app.use("/shelter", shelterRoute);
app.use("/food-program", foodProgramRoute);
app.use("/first-nation", firstNationRoute);
app.use("/", singupAndLoginRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});
