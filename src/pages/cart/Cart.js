import React from "react";
import { connect } from "react-redux";
import MainWrapper from "../../components/Wrapper";
import "./cart.css";

const Cart = (props) => {
  const products = props.productList;
  const filterProduct = products.filter((items) => items.quantity > 0);

  const calculation = () => {
    let sum = 0;
    let i;
    for (i = 0; i < filterProduct.length; i++) {
      sum = sum + filterProduct[i].price * filterProduct[i].quantity;
    }
    return sum;
  };

  return (
    <MainWrapper className='cart-body'>
      <div className='cart-items-header'>
        <h1 style={{ marginTop: "0px" }}>Cart Items</h1>
      </div>
      {filterProduct.length === 0 ? (
        <div className='empty-cart-body'>
          <div>
            <img
              style={{ width: "200px", height: "200px" }}
              src='https://cdn.dribbble.com/users/44167/screenshots/4199208/media/6b915e31225bcd92bee249dc7a977dda.png'
            />
            <div className='cart-items-empty'>No items are added .</div>
          </div>
        </div>
      ) : (
        <div className='cart-items-body'>
          <div
            style={{
              border: "2px solid black",
              width: "60vw",
              overflow: "auto",
              borderColor: "grey",
              // borderRadius: "5px",
              padding: "5px",
              borderRadius: " 5px 0px 0px 5px",
              backgroundColor: "lightgrey",
            }}
          >
            Added Product
            {filterProduct.map((item) => (
              <div key={item.id} className='cart-item-card'>
                <div>
                  <img
                    className='cart-items-image'
                    src={item.images}
                    alt={item.name}
                  />
                </div>

                <div className='product-info'>
                  <div className='cart-items-name'>{item.name}</div>
                  <div>Qty:{item.quantity}</div>
                  <div className='cart-item-price'>{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className='total-products'>
            <div className='total-prod-names'>
              {filterProduct.map((items) => (
                <div className='product-names'>
                  <span style={{ marginBottom: "10px" }}>
                    :: {items.name}
                    <div style={{ marginLeft: "12px" }}>
                      Rs: {items.price} * Qty:{items.quantity}
                    </div>
                  </span>
                </div>
              ))}
            </div>
            <div className='total-price'>
              <hr className='horizontal-row' />
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Total price: <div>{calculation()}</div>
              </span>
            </div>
          </div>
        </div>
      )}
    </MainWrapper>
  );
};

function mapStateToProps({ PdpReducer }) {
  const { productList } = PdpReducer;
  return {
    productList,
  };
}

export default connect(mapStateToProps, {})(Cart);
