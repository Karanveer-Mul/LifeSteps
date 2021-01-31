import LegislatorCard from "./legislatorCard";
import "../../CSS/legislator.css";

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
