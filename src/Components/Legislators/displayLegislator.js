import LegislatorCard from "./LegislatorCard";
import "../../CSS/legislator.css";
import { Link } from "react-router-dom";

const DisplayLegislator = (props) => {
  const data = props.Legislators;
  return (
    <div className="LegislatorGrid">
      {data.map((legislator) => (
        <Link to={{ pathname: `/legislator/${legislator["@attributes"].cid}` }}>
          <LegislatorCard data={legislator["@attributes"]} />
        </Link>
      ))}
    </div>
  );
};

export default DisplayLegislator;
