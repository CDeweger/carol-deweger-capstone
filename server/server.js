const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const firstNationRoute = require("./routes/organizationList");
const singupAndLoginRoute = require("./routes/singupAndLogin");
const donationRoute = require("./routes/donation");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// app.use(express.static("public"));

app.use("/organization", firstNationRoute);
app.use("/", singupAndLoginRoute);
app.use("/donation", donationRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});
