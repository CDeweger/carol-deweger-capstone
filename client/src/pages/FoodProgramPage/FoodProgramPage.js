import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodProgramCard from "../../components/FoodProgramCard/FoodProgramCard";
import "./FoodProgramPage.scss";
const API_URL = process.env.REACT_APP_API_URL;

const FoodProgramPage = () => {
  const [foodProgramList, setFoodProgramList] = useState([]);

  const getFoodProgramList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        setFoodProgramList(
          res.data.filter(
            (type) => type.program_type === "Free/Low Cost Food Program"
          )
        );
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    getFoodProgramList();
  }, []);

  if (foodProgramList) {
    return null;
  }

  return (
    <div className="FirstNationPage">
      <h1 className="FirstNationPage__heading">Free & Low Cost Food Program</h1>
      {foodProgramList.map((foodProgram) => {
        return (
          <FoodProgramCard key={foodProgram.id} foodProgramList={foodProgram} />
        );
      })}
    </div>
  );
};

export default FoodProgramPage;
