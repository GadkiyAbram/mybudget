const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/dashboard", require("./routes/dashboard"));

app.use("/api/auth", require("./routes/jwtAuth"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
