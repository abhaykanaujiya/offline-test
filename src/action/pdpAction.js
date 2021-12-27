import {
  ADD_TO_CART,
  UPDATE_TO_CART,
  DECREASE_CART_ITEMS,
  SET_QUANTITY,
} from "../constants/actionTypes";

export const handleAddToCart = (selectedProduct, productList) => {
  console.log(productList, "handleAddToCart");
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    let updatedProductList = productList;
    updatedProductList.map((product) => {
      if (product.product_id === selectedProduct.product_id) {
        product.quantity = product.quantity + 1;
      }
    });
    dispatch({
      type: ADD_TO_CART,
      payload: {
        updatedProductList: [...updatedProductList],
      },
    });
  };
};

export const handleIncrease = (selectedProduct, productList) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });

    let updatedNewProduct = productList;
    updatedNewProduct.forEach((item) => {
      if (item.product_id === selectedProduct.product_id) {
        item.quantity = item.quantity + 1;
      }
    });

    console.log(productList, " updatedNewCart");
    dispatch({
      type: UPDATE_TO_CART,
      payload: {
        updatedProductList: [...updatedNewProduct],
      },
    });
  };
};

export const handleDecrease = (selectedProduct, cartItems) => {
  console.log(selectedProduct, cartItems, "handle Decrease");
  return (dispatch) => {
    let updatedCart = cartItems;
    updatedCart.map((item) => {
      if (item.product_id === selectedProduct.product_id) {
        item.quantity = item.quantity - 1;
      }
    });
    dispatch({
      type: DECREASE_CART_ITEMS,
      payload: { decreaseProductList: [...updatedCart] },
    });
  };
};

export const handleDecreaseQuantity = (selectedProduct, productList) => {
  console.log("handleDecreaseQuantity", productList);
  return (dispatch) => {
    let setQuantity = productList;
    setQuantity.map((product) => {
      if (product.product_id === selectedProduct.product_id) {
        product.quantity = 0;
      }
    });
    dispatch({
      type: SET_QUANTITY,
      payload: {
        newUpdatedList: [...setQuantity],
      },
    });
  };
};
