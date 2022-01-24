import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedNPO.scss";

const FeaturedNPO = (props) => {
  console.log(props);

  const randomNum = Math.floor(Math.random() * props.organizationList.length);

  return (
    <div className="featuredNPO">
      <div className="featuredNPO__info">
        <h1>{props.organizationList[randomNum].program_name}</h1>
        <p>
          Program type:&nbsp;
          {props.organizationList[randomNum].program_type}
        </p>
        <p>{props.organizationList[randomNum].description}</p>
        <p>Location:&nbsp;{props.organizationList[randomNum].location}</p>
        <div className="featuredNPO__link-container">
          <Link
            className="button featuredNPO__learn-more-button "
            to={{
              pathname: `organization/${props.organizationList[randomNum].id}`,
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="featuredNPO__img-box">
        <img
          className="featuredNPO__img-box--img"
          src={props.organizationList[randomNum].image}
        />
      </div>
    </div>
  );
};

export default FeaturedNPO;
