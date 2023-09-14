import React from "react";
import "./Page1.css";
import SearchBar from './SearchBar.js';
import Data from "./Data.json";

function Desktop () {
  return (
    <div className="desktop">
      <div className="overlap">
        <div className="text-wrapper">Webbot</div>
        <div className="frame">
          <div className="overlap-group">
            <SearchBar placeholder="Enter a Book Name..." data={Data} />
            <img className="search-img" alt="Search img" src={require('./search-img.png')} />
          </div>
        </div>
      </div>
      <div className="reviews-management-wrapper">
        <div className="reviews-management">
          <div className="group">
            <div className="data">
              <div className="div">Busy</div>
              <div className="text-wrapper-2">Ebay ...</div>
              <div className="text-wrapper-3">3</div>
              <div className="text-wrapper-4">iPhone 14 Pro Max</div>
              <div className="text-wrapper-5">Mobile</div>
            </div>
          </div>
          <div className="navbar">
            <div className="text-wrapper-6">id</div>
            <div className="text-wrapper-7">Websites</div>
            <div className="text-wrapper-8">Product Name</div>
            <div className="text-wrapper-9">Reviews</div>
            <div className="text-wrapper-10">Catagory</div>
          </div>
          <div className="navbar-2">
            <div className="text-wrapper-11">Amazon ...</div>
            <div className="div">Busy</div>
            <div className="text-wrapper-6">1</div>
            <div className="text-wrapper-12">iPhone 14 Pro Max</div>
            <div className="text-wrapper-13">Mobile</div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="data-2">
                <div className="text-wrapper-14">Ebay ...</div>
                <div className="text-wrapper-15">2</div>
                <div className="text-wrapper-16">iPhone 14 Pro Max</div>
                <div className="text-wrapper-17">Busy</div>
              </div>
              <div className="text-wrapper-18">Mobile</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle" />
    </div>
  );
};

export default Desktop;