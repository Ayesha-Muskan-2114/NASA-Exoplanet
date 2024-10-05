import React from "react";
import Card from "./Card";

const CardList = ({exoplanets}) => {
    return(
    <div>
        {
        exoplanets.map((user,i) => {
        return (
        <Card 
        key={i} 
        name={exoplanets[i].name} 
        meaning={exoplanets[i].meaning}
         />
        );
    })
    }
    </div>
    );
}

export default CardList;