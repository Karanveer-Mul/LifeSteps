import "../../CSS/legislator.css";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const LegislatorCard = (props) => {
  const data = props.data;
  return (
    <div className="legislatorCard">
      <p style={{ width: "90%" }}>
        <p
          style={{
            fontWeight: "700",
            padding: "0px 0 0 0",
            fontSize: "18px",
            color: "#000000",
          }}
        >
          {data.firstlast}
        </p>
        <br></br>@{data.twitter_id}
        <br></br>
        {data.office}
        <br></br>
        {data.phone}
        <br></br>
        <Link to={{ pathname: `/legislator/${data.cid}` }}>
          <div className="arrowDiv">
            <ArrowForwardIcon className="readMoreArrow" />
          </div>
        </Link>
      </p>
      {data.party === "R" ? (
        <div className="party" style={{ background: "#fa4b54" }}></div>
      ) : (
        <div className="party" style={{ background: "#3333FF" }}></div>
      )}
    </div>
  );
};

export default LegislatorCard;
