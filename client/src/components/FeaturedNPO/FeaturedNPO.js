import React from "react";
import "./FeaturedNPO.scss";

const FeaturedNPO = (props) => {
  // if (!props.shelterList) {
  //   return <p></p>;
  // }
  return (
    <div className="FeaturedNPO">
      <div className="FeaturedNPO__info">
        <h1>{props.shelterList[1].program_name}</h1>
        <p>
          Program type:
          {props.shelterList[1].program_type === "homeless-shelter" ? (
            <span>Homeless shelter</span>
          ) : null}
        </p>
        <p>Category:{props.shelterList[1].description}</p>
        <p>Location:{props.shelterList[1].location}</p>

        <button className="button">Learn More</button>
      </div>
      <div className="FeaturedNPO__img-box">
        <img
          className="FeaturedNPO__img-box--img"
          src={props.shelterList[1].image}
        />
      </div>
    </div>
  );
};

export default FeaturedNPO;
