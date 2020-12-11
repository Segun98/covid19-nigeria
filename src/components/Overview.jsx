import React from "react";
import { Commas } from "../Utils/helpers";

const Overview = ({ data, error, search, setSearch, Filter }) => {
  return (
    <section className="overview">
      {!error && (
        <div className="overview-items">
          <div className="box">
            <h5>Total Confirmed Cases</h5>
            <p>{Commas(data.totalConfirmedCases)}</p>
          </div>
          <div className="box">
            <h5>Total Active Cases</h5>
            <p>{Commas(data.totalActiveCases)}</p>
          </div>
          <div className="box">
            <h5>Discharged</h5>
            <p>{Commas(data.discharged)}</p>
          </div>
          <div className="box">
            {" "}
            <h5>Deaths</h5> <p>{Commas(data.death)}</p>{" "}
          </div>
          <div className="box">
            <h5>Total Sample Tested</h5>
            <p>{Commas(data.totalSamplesTested)}</p>
          </div>
        </div>
      )}

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

      {error && (
        <p style={{ textAlign: "center", margin: "20px 0" }}>
          An error occured... Please refresh the page
        </p>
      )}
    </section>
  );
};

export default Overview;
