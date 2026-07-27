const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./config/db");

const leadRoutes = require("./routes/leadRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// ================= Middleware =================

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false
}));

app.use(express.json());

// ================= Home =================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "LeadDesk Mini Backend Running Successfully"
    });
});

// ================= API =================

app.use("/api/auth", authRoutes);

app.use("/api/leads", leadRoutes);

// ================= 404 =================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API Route Not Found"
    });
});

// ================= Start Server =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server Running on Port ${PORT}`);
});