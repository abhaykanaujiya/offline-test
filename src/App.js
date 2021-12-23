{
  /*
  PLEASE BEGIN THIS BY READING THE README.md FILE
*/
}
import "./styles.css";
import PieChart from "./components/PieChart";
import StyledTable from "./components/Table";
import Buttons from "./components/Buttons";
import React, { useEffect } from "react";
import axios from "axios";

const endpoints = [
  axios.get("http://127.0.0.1:5500/public/data/current_date.json"),
  axios.get("http://127.0.0.1:5500/public/data/vaccine_dates.json"),
];

const initialState = {
  count: 0,
  currentDate: new Date().toDateString(),
  personInfo: [],
};

const reducer = (state, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "GET_PERSON_INFO":
      return { ...state, personInfo: [...action.payload] };
    case "GET_INITIAL_DATE":
      return { ...state, currentDate: action.payload };
    case "UPDATED_LIST":
      return {
        ...state,
        personInfo: action.payload,
        count: action?.payload?.length || 0,
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log("state", state);
  

  const getBarValues = () => {
    const vaccinated = state?.personInfo?.filter((item) => item?.isVaccinated);
    const unVaccinated = state?.personInfo?.length - vaccinated?.length;
    return [vaccinated.length, unVaccinated];
  };

  return (
    <div className='App'>
      <h1>count:{state.count}</h1>
      <div className='chart'>
        <PieChart data={getBarValues()} />
      </div>
      <div className='buttons'>
        <Buttons
          handleIncrease={() => dispatch({ type: "INCREMENT" })}
          currentDate={state?.currentDate}
        />
      </div>
      <b style={{ textAlign: "center" }}>
        {getBarValues()[0]} out of {state?.personInfo?.length || 0} persons have
        been vaccinated.
      </b>
      <div className='table'>
        <StyledTable personInfo={state.personInfo} />
      </div>
    </div>
  );
}
