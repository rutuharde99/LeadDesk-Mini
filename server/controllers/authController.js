const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginAdmin = (req, res) => {

    console.log("Step 1");

    const { email, password } = req.body;

    console.log("Email:", email);

    const sql = "SELECT * FROM admins WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        console.log("Step 2");

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            console.log("Step 3");
            return res.status(401).json({
                message: "Invalid Email"
            });
        }

        const admin = result[0];

        console.log("Step 4");

        const isMatch = await bcrypt.compare(password, admin.password);

        console.log("Step 5");

        if (!isMatch) {
            return res.status(401).json({
                message: "Wrong Password"
            });
        }

        console.log("Step 6");

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

        console.log("Step 7");

        res.json({
            success: true,
            token
        });

    });

};

module.exports = {
    loginAdmin
};