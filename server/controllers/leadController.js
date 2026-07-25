const db = require("../config/db");

// ============================
// Create Lead
// ============================

const createLead = (req, res) => {

    const {
        name,
        email,
        budget,
        message
    } = req.body;

    // Server-side Validation
    if (!name || !email || !budget || !message) {

        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });

    }

    const sql = `
        INSERT INTO leads
        (name, email, budget, message, status)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(

        sql,

        [
            name,
            email,
            budget,
            message,
            "New"
        ],

        (err, result) => {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    success: false,
                    message: "Database Error"
                });

            }

            res.status(201).json({

                success: true,

                message: "Lead Saved Successfully"

            });

        }

    );

};

// ============================
// Get All Leads
// ============================

const getLeads = (req, res) => {

    const sql = `
        SELECT *
        FROM leads
        ORDER BY id DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {

            console.error(err);

            return res.status(500).json({

                success: false,

                message: "Database Error"

            });

        }

        res.status(200).json(results);

    });

};

// ============================
// Update Lead Status
// ============================

const updateLeadStatus = (req, res) => {

    const { id } = req.params;

    const { status } = req.body;

    // Validation
    if (!status) {

        return res.status(400).json({

            success: false,

            message: "Status is required"

        });

    }

    const sql = `
        UPDATE leads
        SET status = ?
        WHERE id = ?
    `;

    db.query(

        sql,

        [status, id],

        (err, result) => {

            if (err) {

                console.error(err);

                return res.status(500).json({

                    success: false,

                    message: "Database Error"

                });

            }

            if (result.affectedRows === 0) {

                return res.status(404).json({

                    success: false,

                    message: "Lead Not Found"

                });

            }

            res.status(200).json({

                success: true,

                message: "Lead Status Updated Successfully"

            });

        }

    );

};

// ============================
// Export Controllers
// ============================

module.exports = {

    createLead,

    getLeads,

    updateLeadStatus

};