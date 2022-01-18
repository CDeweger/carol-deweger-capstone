const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const shelterRoute = require("./routes/shelter");
const foodProgramRoute = require("./routes/foodProgram");
const firstNationRoute = require("./routes/firstNation");
const singupAndLoginRoute = require("./routes/singupAndLogin");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

const JWT_SECRET =
  "53b99e8b91f67d12e04508c91d59b87620edd27c0f28ec01a517cee81d4b87bf";

function authorize(req, res, next) {
  console.log(req.headers);
  if (!req.headers.authorization)
    return res.status(401).json({ message: "not authorized" });
  const authToken = req.headers.authorization.split(" ")[1];

  jwt.verify(authToken, JWT_SECRET, (err, decoded) => {
    console.log("authorize middleware :: JWT verification");
    if (err) {
      return res.status(401).json({ message: "not authorized" });
    }

    req.decoded = decoded;
    next();
  });
}

const users = {};

app.post("/signup", (req, res) => {
  const { username, name, password } = req.body;

  users[username] = {
    name,
  };
  res.json({ success: "true" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    const token = jwt.sign({ name: user.name }, JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
  }
});

app.get("/profile", authorize, (req, res) => {
  console.log("profile endpoint reached");
  res.json(req.decoded);
});

// app.use((req, res, next) => {
//   console.log(`${req.method} request to ${req.path}`);
//   next();
// });

// app.use(express.static("public"));

//test
app.get("/", (req, res) => {
  res.send("hello from server!");
});

app.use("/shelter", shelterRoute);
app.use("/food-program", foodProgramRoute);
app.use("/first-nation", firstNationRoute);
app.use("/", singupAndLoginRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});
