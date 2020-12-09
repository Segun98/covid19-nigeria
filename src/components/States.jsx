import React from "react";

const States = ({ data, loading, error }) => {
  return (
    <section className="states">
      {!loading && !error && (
        <table
          style={{
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed Cases</th>
              <th>Cases On Admission</th>
              <th>Discharged</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            {data.map((s) => (
              <tr key={s._id}>
                <td>{s.state}</td>
                <td>{s.confirmedCases}</td>
                <td>{s.casesOnAdmission}</td>
                <td>{s.discharged}</td>
                <td>{s.death}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default States;
