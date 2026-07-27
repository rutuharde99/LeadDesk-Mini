import { useState } from "react";
import "./LeadForm.css";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function validateForm() {
    let newErrors = {};

    if (formData.name.trim() === "")
      newErrors.name = "Full Name is required";

    if (formData.email.trim() === "")
      newErrors.email = "Email is required";

    if (formData.budget.trim() === "")
      newErrors.budget = "Please select a budget";

    if (formData.message.trim() === "")
      newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setStatusMessage("");
    setStatusType("");

    try {
      const response = await fetch(
        "https://leaddesk-mini-production-d5ae.up.railway.app/api/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("Lead submitted successfully!");
        setStatusType("success");

        setFormData({
          name: "",
          email: "",
          budget: "",
          message: "",
        });
      } else {
        setStatusMessage(data.message || "Something went wrong.");
        setStatusType("error");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Server Error. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="lead-form-section">
      <div className="lead-form-container">
        <div className="form-header">
          <h2>Capture Your Next Lead</h2>
          <p>
            Fill in the details below and our team will get back to you.
          </p>
        </div>

        <form className="lead-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <small className="error">{errors.name}</small>
            )}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small className="error">{errors.email}</small>
            )}
          </div>

          <div className="form-group">
            <label>Budget Range</label>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select Budget</option>
              <option value="Less than ₹10,000">
                Less than ₹10,000
              </option>
              <option value="₹10,000 - ₹50,000">
                ₹10,000 - ₹50,000
              </option>
              <option value="₹50,000 - ₹1,00,000">
                ₹50,000 - ₹1,00,000
              </option>
              <option value="More than ₹1,00,000">
                More than ₹1,00,000
              </option>
            </select>

            {errors.budget && (
              <small className="error">{errors.budget}</small>
            )}
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {errors.message && (
              <small className="error">{errors.message}</small>
            )}
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Lead"}
          </button>
        </form>

        {statusMessage && (
          <p className={`status ${statusType}`}>
            {statusMessage}
          </p>
        )}
      </div>
    </section>
  );
}

export default LeadForm;