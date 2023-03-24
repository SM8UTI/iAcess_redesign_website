import React from "react";

const Search = () => {
  return (
    <div className="search max">
      <div className="container">
        <div className="radiobox">
          <div>
            <input type="radio" id="cs" />
            <label htmlFor="cs">Company Search</label>
          </div>
          <div>
            <input type="radio" id="cs" />
            <label htmlFor="cs">Principal Name</label>
          </div>
        </div>
        <form>
          <input type="text" placeholder="Company Name" />
          <button className="btn-p" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
