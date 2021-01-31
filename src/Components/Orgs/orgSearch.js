import { useState } from "react";
import "../../CSS/orgs.css";
import Spinner from "../layout/spinner";
import Configure_Info from "../../configureInfo";
import { Link } from "react-router-dom";

const OrgSearch = () => {
  const [orgs, setOrgs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const API_KEY = Configure_Info.API_KEY;

  const proxyurl = "https://mysterious-caverns-70248.herokuapp.com/";

  const getOrgs = async (value) => {
    let url = `https://www.opensecrets.org/api/?method=getOrgs&org=${value}&apikey=${API_KEY}&output=json`;
    setLoading(true);
    setLoaded(false);
    setNoResult(false);
    let resp = await fetch(proxyurl + url);

    resp = await resp.json();
    resp = resp.response.organization;
    setOrgs(resp);
    setLoading(false);
    setLoaded(true);
  };

  return (
    <div className="container homeContainer">
      <div className="home">
        <p className="loadTitle">
          Search for<br></br>Organisations
        </p>
        <div className="State">
          <input
            type="text"
            placeholder="Enter the organisation"
            onChange={(event) => getOrgs(event.target.value)}
          />
        </div>
        {loading === true && <Spinner />}
        {loaded === true && (
          <div className="searchResults">
            {orgs.slice(0, 10).map((org) => (
              <Link to={{ pathname: `/org/${org["@attributes"].orgid}` }}>
                <p className="result">{org["@attributes"].orgname}</p>
              </Link>
            ))}
          </div>
        )}
        {noResult === true && (
          <div className="home">
            <p>No results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrgSearch;
