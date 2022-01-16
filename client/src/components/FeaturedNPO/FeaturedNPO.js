import React from "react";
import "./FeaturedNPO.scss";

const FeaturedNPO = (props) => {
  console.log(props);
  return (
    <div className="FeaturedNPO">
      <div className="FeaturedNPO__info">
        <h1>{props.shelterList[2].fields.facility}</h1>
        <p>
          Program type:
          {props.shelterList[2].datasetid === "homeless-shelter-locations" ? (
            <span>Homeless shelter</span>
          ) : null}
        </p>
        <p>Category:{props.shelterList[2].fields.category}</p>
        <p>Location:{props.shelterList[2].fields.geo_local_area}</p>
        <p>
          Meals:
          {props.shelterList[2].fields.meals === "yes" ? (
            <span>Yes</span>
          ) : (
            <span>No</span>
          )}
        </p>
        <button className="button">Learn More</button>
      </div>
      <div className="FeaturedNPO__img-box">
        <img
          className="FeaturedNPO__img-box--img"
          src={props.shelterList[2].fields.image}
        />
      </div>
    </div>
  );
};

export default FeaturedNPO;
