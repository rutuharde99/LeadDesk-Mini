const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// =====================================
// Admin Login
// =====================================

const loginAdmin = (req, res) => {

    console.log("========== LOGIN REQUEST ==========");

    const { email, password } = req.body;

    // Validate Request
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and Password are required"
        });
    }

    console.log("Searching Admin:", email);

    const sql = "SELECT * FROM admins WHERE email = ?";

    db.query(sql, [email], async (err, results) => {

        if (err) {

            console.error("Database Error:");
            console.error(err);

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });

        }

        if (results.length === 0) {

            console.log("Admin Not Found");

            return res.status(401).json({
                success: false,
                message: "Invalid Email"
            });

        }

        const admin = results[0];

        console.log("Admin Found");

        // Compare Password

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {

            console.log("Wrong Password");

            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });

        }

        console.log("Password Matched");

        // Generate JWT Token

        const token = jwt.sign(
            {
                id: admin.id,
                email: admin.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        console.log("JWT Token Generated");

        return res.status(200).json({

            success: true,

            message: "Login Successful",

            token,

            admin: {

                id: admin.id,

                name: admin.name,

                email: admin.email

            }

        });

    });

};

module.exports = {
    loginAdmin
};