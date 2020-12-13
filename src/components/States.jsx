import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { covidThunk } from "../Redux/features/covid";

const States = () => {
  const dispatch = useDispatch();
  //redux store
  const { data, loading, error } = useSelector((state) => state);

  //set state data from redux store
  useEffect(() => {
    setStatesData(data.states || []);
  }, [data.states]);

  //putting states data from redux here to easily implement search functionality

  const [statesData, setStatesData] = useState([]);

  //search state
  const [search, setSearch] = useState("");

  //manual search
  function Filter(e) {
    e.preventDefault();
    //refetch all data if no text
    if (!search) {
      return dispatch(covidThunk());
    }

    const result = data.states.filter(
      (s) => s.state.toLowerCase() === search.toLowerCase()
    );

    //if no result, refecth all data
    if (result.length === 0) {
      return dispatch(covidThunk());
    }
    setStatesData(result);
  }

  return (
    <section className="states">
      <form className="search" onSubmit={Filter}>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          title="search"
          placeholder="Search states..."
          aria-label="search states"
        />
        <button type="submit">Search</button>
      </form>

      {!error && (
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
              <th>Deaths </th>
            </tr>
          </thead>
          <tbody>
            {statesData.map((s) => (
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
      {/* loading indicator */}
      {loading && (
        <div
          style={{
            textAlign: "center",
            padding: "20px 0",
            fontWeight: "bold",
            color: "#02247a",
          }}
        >
          Loading...
        </div>
      )}
      {/* AN EMPTY SPACE TO PUSH DOWN THE FOOTER WHEN A USER SEARCHES  */}
      {statesData.length < 20 && (
        <div
          style={{
            marginBottom: "500px",
          }}
        ></div>
      )}
    </section>
  );
};

export default States;
