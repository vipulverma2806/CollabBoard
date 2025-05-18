// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const app = express();
// // Middleware to handle CORS |
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "*",
//     methods: ["GET", "POST", "PUT", "“DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// // Middleware |
// app.use(express.json());
// // Routes [N |
// // Start Server |
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes")
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.Origin_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization", "Content-type"],
  })
);

connectDB();

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
