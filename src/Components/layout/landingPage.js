import { useCallback, useState } from "react";
import Configure_Info from "../../configureInfo";
import React from "react";

const LandingPage = () => {
  const [Legislators, setLegislators] = useState(null);
  let States = require("../../States.json");
  const states = () => {
    var elm = document.getElementById("foo");
    var df = document.createDocumentFragment();

    for (var i = 0; i < States.length; i++) {
      var option = document.createElement("option");
      option.value = States[i].abbreviation;
      option.appendChild(document.createTextNode(`States[i].name`));
    }
    elm.appendChild(df);
  };

  const getLegislator = useCallback(async () => {
    var API_KEY = Configure_Info.API_KEY;

    const proxyurl = "https://mysterious-caverns-70248.herokuapp.com/";
    const url = `https://www.opensecrets.org/api/?method=getLegislators&id=AS&apikey=${API_KEY}&output=json`;
    try {
      let resp = await fetch(proxyurl + url);
      resp = await resp.json();
      resp = await resp.legislator;
      setLegislators(resp);
      console.log(Legislators);
    } catch (err) {
      console.log(err);
    }
  }, [Legislators]);

  return (
    <div className="container home">
      <div>State {States[0].name}</div>
      <button className="loadButton" onClick={() => getLegislator()}>
        Legislators
      </button>
    </div>
  );
};

export default LandingPage;
