import React from "react";
import "./TestPage.css";
import SearchBar from "./SearchBar";
import BookData from "./Data.json";

function Desktop() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
    </div>
  );
}

export default Desktop;