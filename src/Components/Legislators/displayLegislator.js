import LegislatorCard from "./LegislatorCard";
import "../../CSS/legislator.css";

const DisplayLegislator = (props) => {
  const data = props.Legislators;
  return (
    <div className="LegislatorGrid">
      {data.map((legislator) => (
        <LegislatorCard data={legislator["@attributes"]} />
      ))}
    </div>
  );
};

export default DisplayLegislator;