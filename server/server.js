const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Database
require("./config/db");

// Routes
const leadRoutes = require("./routes/leadRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// =============================
// Middleware
// =============================

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false
}));

app.use(express.json());

// =============================
// Request Logger
// =============================

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// =============================
// Home Route
// =============================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "LeadDesk Mini Backend Running Successfully"
    });
});

// =============================
// Auth Test Route
// =============================

app.get("/api/auth/test", (req, res) => {
    res.json({
        success: true,
        message: "Auth Route Working Successfully"
    });
});

// =============================
// Routes
// =============================

app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

// =============================
// 404 Route
// =============================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// =============================
// Start Server
// =============================

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log("=================================");
    console.log(`✅ Server Running on Port ${PORT}`);
    console.log("=================================");
});

// =============================
// Listen Error
// =============================

server.on("error", (err) => {
    console.error("❌ Server Listen Error");
    console.error(err);
});

// =============================
// Process Debugging
// =============================

process.on("exit", (code) => {
    console.log(`❌ Process exited with code: ${code}`);
});

process.on("SIGTERM", () => {
    console.log("⚠ SIGTERM received");
});

process.on("SIGINT", () => {
    console.log("⚠ SIGINT received");
});

process.on("uncaughtException", (err) => {
    console.error("❌ Uncaught Exception");
    console.error(err);
});

process.on("unhandledRejection", (err) => {
    console.error("❌ Unhandled Rejection");
    console.error(err);
});

// =============================
// Alive Log
// =============================

setInterval(() => {
    console.log("🟢 Server Alive...");
}, 30000);