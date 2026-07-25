import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard">

      <header className="dashboard-header">

        <div>
          <h1>LeadDesk Admin</h1>
          <p>Manage all customer leads.</p>
        </div>

        <button className="logout-btn">
          Logout
        </button>

      </header>

      <div className="dashboard-top">

        <input
          type="text"
          placeholder="Search by name or email..."
        />

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Budget</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Rahul Sharma</td>
              <td>rahul@gmail.com</td>
              <td>₹10k - ₹25k</td>
              <td>
                <span className="status new">
                  New
                </span>
              </td>
              <td>
                <button className="action-btn">
                  Change
                </button>
              </td>
            </tr>

            <tr>
              <td>Sneha Patil</td>
              <td>sneha@gmail.com</td>
              <td>₹25k - ₹50k</td>
              <td>
                <span className="status contacted">
                  Contacted
                </span>
              </td>
              <td>
                <button className="action-btn">
                  Change
                </button>
              </td>
            </tr>

            <tr>
              <td>Amit Verma</td>
              <td>amit@gmail.com</td>
              <td>₹50k+</td>
              <td>
                <span className="status closed">
                  Closed
                </span>
              </td>
              <td>
                <button className="action-btn">
                  Change
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;