import { combineReducers } from "redux";
import PdpReducer from "./ProductDetailReducer";
import RegisterReducer from "./RegisterReducer";

export default combineReducers({ PdpReducer, RegisterReducer });
