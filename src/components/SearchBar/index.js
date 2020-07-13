import React from "react";

function Search() {
  return (
    <div className="jumbotronWrapper searchWrapper">
      <div className="jumbotron searchContainer">
        <p className="lead searchHeader">Book Search</p>
        <form>
          <div className="form-group">
            <label className="searchLabel" htmlFor="search">
              Book:
            </label>
            <input
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for a book"
              id="search"
            />
            <br />
            <button className="btn btn-primary searchBtn">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
