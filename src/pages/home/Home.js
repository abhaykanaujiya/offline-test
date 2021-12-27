import React from "react";
import { connect } from "react-redux";
import {
  handleAddToCart,
  handleIncrease,
  handleDecrease,
  handleDecreaseQuantity,
} from "../../action/pdpAction";
import MainWrapper from "../../components/Wrapper";
import "./home.css";

function ProductList(props) {
  console.log(props.productList, "cartitems");
  const addToCart = (selectedProduct) => {
    props.handleAddToCart(selectedProduct, props.productList);
  };
  const increaseCartItem = (selectedProduct) => {
    props.handleIncrease(selectedProduct, props.productList);
  };
  const decreaseCartItems = (selectedProduct) => {
    props.handleDecrease(selectedProduct, props.productList);
  };
  const decreaseQuantity = (selectedProduct) => {
    props.handleDecreaseQuantity(
      selectedProduct,
      props.productList,
      props.cartItems
    );
  };

  console.log(props.productList, "product list");
  return (
    <MainWrapper>
      <div className='render-cards'>
        {props.productList?.map((product) => (
          <div className='cart-product-body'>
            <div>
              <img
                className='cart-product-image'
                src={product.images}
                alt='img'
              />

              <div className='product-rating-container'>
                {product.supplier_reviews_summary.average_rating}
              </div>
            </div>

            <div div className='product-detail'>
              <div className='product-detail-name'>
                <div>{product.name}</div>
              </div>
              <div className='product-detail-price'>{product.price}</div>
            </div>
            <div className='button-header'>
              <span>
                {product.quantity === 0 ? (
                  <button className='button' onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                ) : (
                  <>
                    <button
                      className='button-decrease'
                      onClick={
                        product.quantity > 1
                          ? () => decreaseCartItems(product)
                          : () => decreaseQuantity(product)
                      }
                    >
                      -
                    </button>
                    {product.quantity}
                    <button
                      className='button-increase'
                      onClick={() => increaseCartItem(product)}
                    >
                      +
                    </button>
                  </>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </MainWrapper>
  );
}

function mapStateToProps({ PdpReducer }) {
  const { productList } = PdpReducer;
  console.log(productList, " reducercers data");
  return {
    productList,
  };
}

export default connect(mapStateToProps, {
  handleIncrease,
  handleDecrease,
  handleAddToCart,
  handleDecreaseQuantity,
})(ProductList);
