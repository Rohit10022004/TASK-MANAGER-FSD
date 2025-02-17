const express = require("express");
const mongoose = require("./db");
const cors = require("cors");
const taskRoutes = require("./routes");
const authRoutes = require("./auth");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
