const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const userRoute = require("./routes/User");
const bottleRoute = require("./routes/Bottles");
app.use("/user", userRoute);
app.use("/bottles", bottleRoute);

app.listen(3001, (_req, res) => {
  console.log("Server running...");
});
