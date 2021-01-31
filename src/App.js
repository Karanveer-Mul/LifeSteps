import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/layout/navbar";
import LandingPage from "./Components/layout/landingPage";
import LegislatorInfo from "./Components/Legislators/legislatorInfo";
import OrgSearch from "./Components/Orgs/orgSearch";
import OrgInfo from "./Components/Orgs/orgInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/legislator/:id" component={LegislatorInfo} />
          <Route exact path="/orgsearch" component={OrgSearch} />
          <Route exact path="/org/:id" component={OrgInfo} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
