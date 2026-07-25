import { useEffect, useState } from "react";
import API from "../services/api";
import "./../styles/Admin.css";

function Admin() {

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  // ==========================
  // Fetch Leads
  // ==========================

  const fetchLeads = async () => {

    try {

      const response = await API.get("/leads");

      setLeads(response.data);

    } catch (error) {

      console.log(error);

      alert("Unable to fetch leads");

    }

  };

  useEffect(() => {

    fetchLeads();

  }, []);

  // ==========================
  // Update Status
  // ==========================

  const updateStatus = async (id, status) => {

    try {

      await API.put(`/leads/${id}`, {
        status,
      });

      fetchLeads();

    } catch (error) {

      console.log(error);

      alert("Unable to update status");

    }

  };

  // ==========================
  // Search Filter
  // ==========================

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase()) ||
    lead.email.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="admin-page">

      <div className="admin-header">

        <h1>Lead Management</h1>

        <p>Manage and update all customer leads.</p>

      </div>

      <div className="search-section">

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Budget</th>

              <th>Message</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {filteredLeads.map((lead) => (

              <tr key={lead.id}>

                <td>{lead.name}</td>

                <td>{lead.email}</td>

                <td>{lead.budget}</td>

                <td>{lead.message}</td>

                <td>

                  <select
                    value={lead.status}
                    onChange={(e) =>
                      updateStatus(
                        lead.id,
                        e.target.value
                      )
                    }
                  >

                    <option value="New">New</option>

                    <option value="Contacted">
                      Contacted
                    </option>

                    <option value="Closed">
                      Closed
                    </option>

                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Admin;