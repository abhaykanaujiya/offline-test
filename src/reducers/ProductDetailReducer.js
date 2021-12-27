import {
  PRODUUCT,
  ADD_TO_CART,
  UPDATE_TO_CART,
  DECREASE_CART_ITEMS,
  SET_QUANTITY,
} from "../constants/actionTypes";
import productList from "../data/ProductsData.json";

const INITIAL_STATE = {
  productList: [...productList.payload.products],
};

export default function ProductDetailReducer(state = INITIAL_STATE, action) {
  console.log(action.payload, "ProductDetailReducerss");
  switch (action.type) {
    
    case ADD_TO_CART:
      return {
        ...state,
        productList: [...action.payload.updatedProductList],
      };
    case UPDATE_TO_CART:
      return {
        ...state,
        productList: [...action.payload.updatedProductList],
      };
    case DECREASE_CART_ITEMS:
      return {
        ...state,
        productList: [...action.payload.decreaseProductList],
      };
    case SET_QUANTITY:
      return {
        ...state,
        productList: action.payload.newUpdatedList,
      };

    default:
      return state;
  }
}
