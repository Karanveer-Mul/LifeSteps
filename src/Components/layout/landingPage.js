import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

const LandingPage = () => {
  const [searchResult, setSearchResult] = useState(null);

  return (
    <div className="container home">
      <div className="row searchBar">
        <SearchIcon className="searchIcon" />
        <input placeholder="Search for song" />
      </div>
    </div>
  );
};

export default LandingPage;
