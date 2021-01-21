import { useCallback, useState, useEffect } from "react";
import Configure_Info from "../../configureInfo";
import React from "react";

const LandingPage = () => {
  let States = require("../../States.json");

  const [Legislators, setLegislators] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const getLegislator = async () => {
    var API_KEY = Configure_Info.API_KEY;

    const proxyurl = "https://mysterious-caverns-70248.herokuapp.com/";
    const url = `https://www.opensecrets.org/api/?method=getLegislators&id=${selectedState}&apikey=${API_KEY}&output=json`;
    try {
      let resp = await fetch(proxyurl + url);
      resp = await resp.json();
      resp = await resp.legislator;
      setLegislators(resp);
      console.log(Legislators);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container home">
      <div>
        State
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
    </div>
  );
};

export default LandingPage;
