import LegislatorCard from "./LegislatorCard";
import "../../CSS/legislator.css";
import { Link } from "react-router-dom";

const DisplayLegislator = (props) => {
  const data = props.Legislators;
  return (
    <div className="LegislatorGrid">
      {data.map((legislator) => (
        <LegislatorCard
          key={legislator["@attributes"].cid}
          data={legislator["@attributes"]}
        />
      ))}
    </div>
  );
};

export default DisplayLegislator;
