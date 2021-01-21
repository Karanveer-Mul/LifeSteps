import React from "react";
import { useState } from "react";
import Configure_Info from "../../configureInfo";
import spinner from "../../assets/spinner.svg";
import "../../CSS/spinner.css";
import DisplayLegislator from "../Legislators/displayLegislator";

const LandingPage = () => {
  let States = require("../../States.json");

  const [Legislators, setLegislators] = useState(null);
  const [selectedState, setSelectedState] = useState(States[0].abbreviation);
  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const getLegislator = async () => {
    setDataLoaded(false);
    var API_KEY = Configure_Info.API_KEY;

    const proxyurl = "https://mysterious-caverns-70248.herokuapp.com/";
    const url = `https://www.opensecrets.org/api/?method=getLegislators&id=${selectedState}&apikey=${API_KEY}&output=json`;
    try {
      setLoading(true);
      let resp = await fetch(proxyurl + url);
      resp = await resp.json();
      resp = await resp.response.legislator;
      resp = await Array.from(resp);
      setLegislators(resp);
      setLoading(false);
      setDataLoaded(true);
      console.log(Legislators);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container home">
      <div className="State">
        <p>State</p>
        <form>
          <select
            defaultValue={selectedState}
            onChange={(event) => {
              setSelectedState(event.target.value);
            }}
          >
            {States.map((state) => (
              <option key={state.name} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </form>
      </div>
      <button className="loadButton" onClick={() => getLegislator()}>
        Legislators
      </button>
      {loading === true && (
        <div className="home">
          <img src={spinner} className="spinner" alt="loader" />
          <p>Fetching data</p>
        </div>
      )}
      {dataLoaded === true && <DisplayLegislator Legislators={Legislators} />}
    </div>
  );
};

export default LandingPage;
