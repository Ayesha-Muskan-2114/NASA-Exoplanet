import React from "react";

const Search = ({searchfield, searchChange})=>{
    return(
        <div className="pa2 tc">
        <input className="pa3 b b--green bg-white"
         type='search' placeholder="Search Exoplanets"
        onChange={searchChange} />
        </div>
    );

}

export default Search;