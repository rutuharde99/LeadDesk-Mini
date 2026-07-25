const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const leadRoutes = require("./routes/leadRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// =============================
// Middleware
// =============================

app.use(cors());

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
    res.send("LeadDesk Mini Backend Running");
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
// API Routes
// =============================

app.use("/api/leads", leadRoutes);

app.use("/api/auth", authRoutes);

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

app.listen(PORT, () => {
    console.log("===================================");
    console.log(`✅ Server running on http://127.0.0.1:${PORT}`);
    console.log("===================================");
});

// =============================
// Debug - Server Alive
// =============================

setInterval(() => {
    console.log("🟢 Server is still running...");
}, 5000);

// =============================
// Error Handlers
// =============================

process.on("uncaughtException", (err) => {
    console.error("❌ Uncaught Exception");
    console.error(err);
});

process.on("unhandledRejection", (err) => {
    console.error("❌ Unhandled Rejection");
    console.error(err);
});