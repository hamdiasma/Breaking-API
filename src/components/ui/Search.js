import React, { useState } from "react";

const Search = ({getQuery}) => {

  const [texSearch, setTextSearch] = useState("");

  const handelChange = (q) => {
      console.log(q)
    setTextSearch(q);
    getQuery(q)
  };



  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          Search
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        autoFocus
        value={texSearch}
        onChange={(e)=>handelChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
