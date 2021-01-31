import { useEffect, useState } from "react";
import "../../CSS/orgs.css";
import Spinner from "../layout/spinner";
import Configure_Info from "../../configureInfo";
import { Link } from "react-router-dom";
import OrgBar from "./orgBar";
import "../../CSS/legislatorInfo.css";

const OrgInfo = ({ match }) => {
  const org_id = match.params.id;

  const [org, setOrg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const API_KEY = Configure_Info.API_KEY;
  const url = `http://www.opensecrets.org/api/?method=orgSummary&id=${org_id}&apikey=${API_KEY}&output=json`;
  const proxyurl = "https://mysterious-caverns-70248.herokuapp.com/";

  var party = [];

  useEffect(() => {
    const getOrg = async () => {
      setLoaded(false);
      setLoading(true);
      let resp = await fetch(proxyurl + url);
      resp = await resp.json();
      resp = resp.response.organization;
      setOrg(resp);

      setLoading(false);
      setLoaded(true);
    };
    getOrg();
  }, [API_KEY, org_id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="home">
      {loaded == true && (
        <div className="legislatorData">
          <div className="legislatorInfo">
            <div className="subInfo" style={{ width: "100%" }}>
              <p
                className="minorInfo"
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  padding: "14px 0 14px 0",
                  color: "black",
                }}
              >
                {org["@attributes"].orgname}
              </p>
              <p className="lightText minorInfo elec">
                Year: {org["@attributes"].cycle}
              </p>
            </div>
          </div>
          <div className="legislatorInfo">
            <div className="subInfo" style={{ width: "100%" }}>
              <p className="subHeading">Capital spent towards each party</p>
              <div
                className="paraText"
                style={{ width: "100%", textAlign: "left" }}
              >
                {
                  ((party = [
                    {
                      party: "Democrats",
                      total: org["@attributes"].dems,
                      fill: "#3333FF",
                    },
                    {
                      party: "Republicans",
                      total: org["@attributes"].repubs,
                      fill: "#fa4b54",
                    },
                  ]),
                  (<OrgBar data={party} />))
                }
              </div>
            </div>
          </div>
          <div className="legislatorInfo">
            <div className="subInfo" style={{ width: "100%" }}>
              <div
                className="paraText"
                style={{ width: "100%", textAlign: "left" }}
              >
                <p className="subHeading contributors">Soft Money:</p>{" "}
                <p className="contributors">${org["@attributes"].soft}</p>
                <br></br>
                <p className="subHeading contributors">
                  Members Invested:
                </p>{" "}
                <p className="contributors">
                  {org["@attributes"].mems_invested}
                </p>
                <br></br>
                <p className="subHeading contributors">
                  Total given to Candidates:
                </p>{" "}
                <p className="contributors">${org["@attributes"].total}</p>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgInfo;
