import StatusBadge from "./StatusBadge";

function LeadTable({ leads }) {

  return (

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

          {

            leads.length === 0 ?

            (

              <tr>

                <td colSpan="5" className="no-data">

                  No Leads Found

                </td>

              </tr>

            )

            :

            (

              leads.map((lead)=>(

                <tr key={lead.id}>

                  <td>{lead.name}</td>

                  <td>{lead.email}</td>

                  <td>{lead.budget}</td>

                  <td>{lead.message}</td>

                  <td>

                    <StatusBadge status={lead.status}/>

                  </td>

                </tr>

              ))

            )

          }

        </tbody>

      </table>

    </div>

  );

}

export default LeadTable;