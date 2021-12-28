import "./styles.css";
import PieChart from "./components/PieChart";
import StyledTable from "./components/Table";
import Buttons from "./components/Buttons";
import React, { useEffect } from "react";
import axios from "axios";
import moment from "moment";

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
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        currentDate: action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        currentDate: action.payload,
      };
    case "GET_INITIAL_DATE":
      return { ...state, currentDate: action.payload };

    case "GET_PERSON_INFO":
      return { ...state, personInfo: [...action.payload] };

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

  const getAllData = () => {
    Promise.all(endpoints)
      .then(([res1, res2]) => {
        const newList = [];
        res2?.data?.map((item) => {
          if (
            new Date(item?.vaccination_date) <=
            new Date(res1?.data?.current_date)
          ) {
            newList.push({ ...item, isVaccinated: true });
          } else {
            newList.push({ ...item, isVaccinated: false });
          }
        });
        dispatch({ type: "UPDATED_LIST", payload: [...newList] });
        dispatch({
          type: "GET_INITIAL_DATE",
          payload: res1?.data?.current_date || "",
        });
      })
      .catch((err) => console.log(err, "error"));
  };

  useEffect(() => {
    getAllData();
  }, []);

  const getBarValues = () => {
    const vaccinated = state?.personInfo?.filter((item) => item?.isVaccinated);
    const unVaccinated = state?.personInfo?.length - vaccinated?.length;
    return [vaccinated.length, unVaccinated];
  };
  const incrementDate = (date) => {
    var moment = require("moment");
    var a = moment(date, "YYYY-MM-DD").add(1, "day");
    var newDates = a.format("YYYY-MM-DD");
    dispatch({ type: "INCREMENT", payload: newDates });
  };
  const decrementDate = (date) => {
    var moment = require("moment");
    var a = moment(date, "YYYY-MM-DD").subtract(1, "day");
    var updateDates = a.format("YYYY-MM-DD");
    dispatch({ type: "DECREMENT", payload: updateDates });
  };

  return (
    <div className='App'>
      <h1>count:{state.count}</h1>
      <div className='chart'>
        <PieChart data={getBarValues()} />
      </div>
      <div className='buttons'>
        <Buttons
          handleIncrease={() => incrementDate(state.currentDate)}
          handleDecrease={() => decrementDate(state.currentDate)}
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
