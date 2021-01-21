import { useCallback, useEffect } from "react";
import Configure_Info from "../../configureInfo";

const Legislators = (props) => {
  var API_KEY = Configure_Info.API_KEY;

  const getLegislator = useCallback(async () => {
    const proxyurl = "https://mysterious-caverns-70248.herokuapp.com/";
    const url = `https://www.opensecrets.org/api/?method=getLegislators&id=NJ&apikey=${API_KEY}`;
    try {
      let resp = await fetch(proxyurl + url);
      resp = await resp.json();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getLegislator();
  }, [getLegislator]);

  return <div></div>;
};

export default Legislators;
