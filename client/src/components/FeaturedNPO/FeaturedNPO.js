import React from "react";
import "./FeaturedNPO.scss";

const FeaturedNPO = (props) => {
  console.log(props);

  const randomeNum = Math.floor(Math.random() * 19);

  return (
    <div className="FeaturedNPO">
      <div className="FeaturedNPO__info">
        <h1>{props.organizationList[randomeNum].program_name}</h1>
        <p>
          Program type:
          {props.organizationList[randomeNum].program_type}
        </p>
        <p>{props.organizationList[randomeNum].description}</p>
        <p>Location:{props.organizationList[randomeNum].location}</p>

        <button className="button">Learn More</button>
      </div>
      <div className="FeaturedNPO__img-box">
        <img
          className="FeaturedNPO__img-box--img"
          src={props.organizationList[randomeNum].image}
        />
      </div>
    </div>
  );
};

export default FeaturedNPO;
