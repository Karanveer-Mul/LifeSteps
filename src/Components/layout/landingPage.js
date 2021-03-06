import React from "react";
import { useState } from "react";
import Configure_Info from "../../configureInfo";
import Spinner from "./spinner";
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
    <div className="container homeContainer">
      <div className="home">
        <p className="loadTitle">
          JUST ENTER A<br></br>STATE!
        </p>
        <p className="loadSubTitle">
          Never waste time researching <br></br>your State Legislators
        </p>
        <div className="State">
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
          Load
        </button>
        {loading === true && <Spinner />}
      </div>
      {dataLoaded === true && <DisplayLegislator Legislators={Legislators} />}
    </div>
  );
};

export default LandingPage;
