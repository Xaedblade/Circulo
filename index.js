require("dotenv").config();
const express = require("express");
const veteransRouter = require("./routes/veterans.router");

const app = express();

app.use(express.json());

// API Routes
app.use("/api/veterans", veteransRouter);
app.use("*", (req, res, next) => {
  return res.status(404).json({ success: false, message: "Not Found" });
});

PORT = process.env.PORT || 5004;

app.listen(PORT, console.log(`Server running on port: ${PORT}`));
