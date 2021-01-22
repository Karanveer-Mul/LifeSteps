import Configure_Info from "../../configureInfo";
import spinner from "../../assets/spinner.svg";
import { useEffect, useState } from "react";
import "../../CSS/legislatorInfo.css";

const LegislatorInfo = ({ match }) => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const c_id = match.params.id;
  const API_KEY = Configure_Info.API_KEY;
  const getLegislator = async () => {
    setLoading(true);
    const url = `http://www.opensecrets.org/api/?method=memPFDprofile&year=2016&cid=${c_id}&output=json&apikey=${API_KEY}`;
    const proxyurl = "https://mysterious-caverns-70248.herokuapp.com/";

    let resp = await fetch(proxyurl + url);
    resp = await resp.json();
    resp = await resp.response.member_profile;
    setInfo(resp);
    setLoading(false);
    setDataLoaded(true);
    console.log(resp);
  };

  useEffect(() => {
    getLegislator();
  }, []);

  if (loading) {
    return (
      <div className="home">
        <img src={spinner} className="spinner" alt="loader" />
        <p>Fetching data</p>
      </div>
    );
  }

  return (
    <div className="legislatorInfo">
      {dataLoaded == true && <div>name</div>}
    </div>
  );
};

export default LegislatorInfo;
