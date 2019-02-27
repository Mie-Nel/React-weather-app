import React from "react";
import classes from "./SearchCity.module.css";

const SearchCity = props => {
  return (
    <div className={classes.SearchCity}>
      <form>
        <input
          type="text"
          value={props.value}
          placeholder="Type a city..."
          onChange={evt => props.onChangeInput(evt.target.value)}
        />
        <button type="submit" onClick={props.fetchCity}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchCity;
