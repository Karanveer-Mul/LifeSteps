import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layout/navbar";
import LandingPage from "./Components/layout/landingPage";
import LegislatorInfo from "./Components/Legislators/LegislatorInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/legislator/:id" component={LegislatorInfo} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
