import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedNPO.scss";

const FeaturedNPO = (props) => {
  console.log(props);

  const randomNum = Math.floor(Math.random() * props.organizationList.length);

  return (
    <div className="FeaturedNPO">
      <div className="FeaturedNPO__info">
        <h1>{props.organizationList[randomNum].program_name}</h1>
        <p>
          Program type:
          {props.organizationList[randomNum].program_type}
        </p>
        <p>{props.organizationList[randomNum].description}</p>
        <p>Location:{props.organizationList[randomNum].location}</p>

        <Link
          className="button"
          to={{
            pathname: `organization/${props.organizationList[randomNum].id}`,
          }}
        >
          Learn More
        </Link>
      </div>
      <div className="FeaturedNPO__img-box">
        <img
          className="FeaturedNPO__img-box--img"
          src={props.organizationList[randomNum].image}
        />
      </div>
    </div>
  );
};

export default FeaturedNPO;
