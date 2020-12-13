import React from "react";
import { Commas } from "../Utils/helpers";
import { useSelector } from "react-redux";

const Overview = () => {
  //redux store
  const { data, error } = useSelector((state) => state);

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

      {error && (
        <p style={{ textAlign: "center", margin: "20px 0" }}>
          An error occured... Please refresh the page
        </p>
      )}
    </section>
  );
};

export default Overview;
