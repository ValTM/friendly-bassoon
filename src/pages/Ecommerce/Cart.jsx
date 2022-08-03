import React from 'react';
import image from '../../assets/ecommerce-img/image-product-1-thumbnail.jpg';
import deletIcon from '../../assets/ecommerce-img/icon-delete.svg';
import PropTypes from 'prop-types';

function Cart(props) {
  return (
    <div className="w-[350px] h-[250px]  bg-white shadow-2xl absolute rounded-2xl top-[70px] right-[15px] z-[20] xl:top-[50px] ">
      <p className="font-bold border-b-2 px-6 py-4 ">Cart</p>
      {props.items === 0 ? (
        <p
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        "
        >
          Your cart is empty
        </p>
      ) : (
        <>
          <div className="flex items-center m-6 justify-between">
            <img className="w-[60px]" src={image} alt="cart" />
            <p className=" text-[14px]">
              Fall Limited Edition Sneakers
              <br />
              $125.00 x {props.items} - <strong>${props.items * 125}</strong>
            </p>
            <img
              src={deletIcon}
              className=" cursor-pointer"
              onClick={props.checkout}
            />
          </div>
          <div
            className="m-6 bg-[#FF7E1B] h-14 rounded-lg flex justify-center items-center text-white cursor-pointer"
            onClick={props.checkout}
          >
            Checkout
          </div>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  items: PropTypes.number,
  checkout: PropTypes.number,
};

export default Cart;
