import "../../CSS/legislator.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const LegislatorCard = (props) => {
  const data = props.data;
  let date = new Date();
  date = date.getFullYear();
  return (
    <div className="legislatorCard">
      <p>
        <p
          style={{ fontWeight: "700", padding: "7px 0 0 0", fontSize: "18px" }}
        >
          {data.firstlast}
        </p>
        <br></br>
        <br></br>@{data.twitter_id}
        <br></br>
        {data.first_elected}-{date}
        <br></br>
        <ArrowForwardIcon className="readMoreArrow" />
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
