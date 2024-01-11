import React from "react";

const KitItem = ({ kitSrc, name }) => {
  return (
    <div>
      <img className="kit" src={require(`../images${kitSrc}`)} alt=""></img>
      <p>{name}</p>
    </div>
  );
};

export default KitItem;
