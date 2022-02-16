import React, { useEffect, useState } from "react";
import axios from "axios";
import FirstNationCard from "../../components/FirstNationCard/FirstNationCard";
import "./FirstNationPage.scss";

const API_URL = process.env.REACT_APP_API_URL;

const FirstNationPage = () => {
  const [firstNationList, setFirstNationList] = useState([]);

  const getFirstNationList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        setFirstNationList(
          res.data.filter(
            (type) => type.program_type === "First Nations Organization"
          )
        );
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    getFirstNationList();
  }, []);

  if (!firstNationList) {
    return null;
  }

  return (
    <div className="FirstNationPage">
      <h1 className="FirstNationPage__heading">
        First Nation Non-Profit Organizations
      </h1>
      {firstNationList.map((firstNation) => {
        return (
          <FirstNationCard key={firstNation.id} firstNationList={firstNation} />
        );
      })}
    </div>
  );
};

export default FirstNationPage;
