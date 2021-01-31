import Configure_Info from "../../configureInfo";
import spinner from "../../assets/spinner.svg";
import { useEffect, useState } from "react";
import LegislatorBar from "./legislatorBar";
import "../../CSS/legislatorInfo.css";

const LegislatorInfo = ({ match }) => {
  const [info, setInfo] = useState(null);
  const [contributors, setContributors] = useState(null);
  const [industries, setIndustries] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const c_id = match.params.id;
  const img_src = `https://cdn1.opensecrets.org/congress-members/photos/${c_id}.jpg`;
  const alt = c_id;
  const API_KEY = Configure_Info.API_KEY;

  var name;
  let data = [];
  let dataIndustry = [];

  useEffect(() => {
    const getLegislator = async () => {
      setLoading(true);
      const sum = `http://www.opensecrets.org/api/?method=candSummary&cid=${c_id}&output=json&apikey=${API_KEY}`;
      const con = `http://www.opensecrets.org/api/?method=candContrib&cid=${c_id}&output=json&apikey=${API_KEY}`;
      const ind = `http://www.opensecrets.org/api/?method=candIndustry&cid=${c_id}&output=json&apikey=${API_KEY}`;
      const proxyurl = "https://mysterious-caverns-70248.herokuapp.com/";

      let sum_resp = await fetch(proxyurl + sum);
      let con_resp = await fetch(proxyurl + con);
      let ind_resp = await fetch(proxyurl + ind);
      sum_resp = await sum_resp.json();
      sum_resp = await sum_resp.response.summary;
      setInfo(sum_resp);
      con_resp = await con_resp.json();
      con_resp = await con_resp.response.contributors;
      setContributors(con_resp);
      ind_resp = await ind_resp.json();
      ind_resp = await ind_resp.response.industries.industry;
      setIndustries(ind_resp);
      setLoading(false);
      setDataLoaded(true);
    };
    getLegislator();
  }, [API_KEY, c_id]);

  if (loading) {
    return (
      <div className="home" style={{ height: "80vh" }}>
        <img src={spinner} className="spinner" alt="loader" />
        <p>Fetching data</p>
      </div>
    );
  }

  const getName = () => {
    name = info["@attributes"].cand_name.split(",");
    return name === "" ? " " : name[1] + " " + name[0];
  };

  return (
    <div className="home">
      {dataLoaded === true && (
        <div className="legislatorData">
          <div className="legislatorInfo">
            <div className="imgContainer">
              <img
                className="profileImage"
                src={img_src}
                alt={alt}
                width="175px"
                height="219px"
              />
            </div>
            <div className="subInfo" style={{ width: "80%" }}>
              <p className="subHeading">{getName()}</p>

              <p className="minorInfo">
                Party: {info["@attributes"].party} <br></br>State:{" "}
                {info["@attributes"].state}
              </p>
              <p className="lightText minorInfo elec">
                First Elected: {info["@attributes"].first_elected}
                <br></br>
                Next Election: {info["@attributes"].next_election}
                <br></br>
              </p>
            </div>
          </div>
          <div className="legislatorInfo">
            <div className="subInfo" style={{ width: "100%" }}>
              <p className="subHeading">Top Contributors</p>
              <div
                className="paraText"
                style={{ width: "100%", textAlign: "left" }}
              >
                {
                  (contributors.contributor
                    .slice(0, 5)
                    .map((contributor) =>
                      data.push(contributor["@attributes"])
                    ),
                  (<LegislatorBar data={data} />))
                }
              </div>
            </div>
          </div>
          <div className="legislatorInfo">
            <div className="subInfo" style={{ width: "100%" }}>
              <p className="subHeading">Top Industries</p>
              <div
                className="paraText"
                style={{ width: "100%", textAlign: "left" }}
              >
                {
                  (industries
                    .slice(0, 5)
                    .map((contributor) =>
                      dataIndustry.push(contributor["@attributes"])
                    ),
                  (<LegislatorBar data={data} />))
                }
              </div>
            </div>
          </div>
          <p
            className="lightText"
            style={{ textAlign: "left", padding: "10px 0 10px 0" }}
          >
            <b>Note:</b>
            {contributors["@attributes"].notice}
          </p>
        </div>
      )}
    </div>
  );
};

export default LegislatorInfo;
