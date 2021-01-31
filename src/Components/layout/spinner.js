import "../../CSS/spinner.css";
import spinner from "../../assets/spinner.svg";

const Spinner = () => {
  return (
    <div className="home">
      <img src={spinner} className="spinner" alt="loader" />
      <p>Fetching data</p>
    </div>
  );
};

export default Spinner;
