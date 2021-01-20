import React, { useState } from "react";

const LandingPage = () => {
  const [searchResult, setSearchResult] = useState(null);

  return (
    <div className="container home">
      <div className="Bar">
        <input className="searchBar" placeholder="Search a name" />
      </div>
      <div className="buttons">
        <button className="searchButton">Search</button>
      </div>
    </div>
  );
};

export default LandingPage;
