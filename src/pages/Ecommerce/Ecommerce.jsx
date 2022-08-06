import React from 'react';
import Header from '../../components/Header';
import hamburger from '../../assets/ecommerce-img/icon-menu.svg';
import close from '../../assets/ecommerce-img/icon-close.svg';
import cart from '../../assets/ecommerce-img/icon-cart.svg';
import avatar from '../../assets/ecommerce-img/image-avatar.png';
import logo from '../../assets/ecommerce-img/logo.svg';
import { useState } from 'react';
import './Ecommerce.css';

import minus from '../../assets/ecommerce-img/icon-minus.svg';
import plus from '../../assets/ecommerce-img/icon-plus.svg';
import DesktopGallery from './DesktopGallery/DesktopGallery';
import Cart from './Cart';
import GalleryComponent from './DesktopGallery/GalleryComponent';

function Ecommerce() {
  const [nav, showNav] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [index] = useState(0);
  const [items, setItems] = useState(0);
  let [quantity, setQuantity] = useState('');
  const [cartModal, setCartModal] = useState(false);

  const openNav = () => {
    showNav(!nav);
    toggle ? setToggle(false) : setToggle(true);
  };

  const increment = () => {
    quantity++;
    setQuantity(quantity);
  };

  const decrement = () => {
    setQuantity(quantity === 0 ? 0 : --quantity);
  };

  const handleCartModal = () => {
    setCartModal(!cartModal);
  };

  const addToCart = () => {
    setQuantity(0);
    setItems(quantity);
  };

  const handleChange = (e) => {
    const parsed = parseInt(e.target.value);
    if (parsed >= 0 && parsed < 1000) {
      setQuantity(parsed);
    } else {
      setQuantity(0);
    }
  };

  return (
    <div>
      <Header title="Ecommerce" />
      <div className="ec--body ">
        <nav className="relative flex justify-between items-center h-[60px]  px-5  xl:border-b xl:mt-10 xl:pb-10 xl:w-[1200px] xl:mx-auto 2xl:w-[1350px] ">
          <div className="flex items-center justify-between w-[150px] z-[1]    ">
            <img
              className="xl:hidden "
              onClick={openNav}
              src={hamburger}
              alt=""
            />
            <img className="ml-2" src={logo} alt="" />
            <div className="hidden xl:block ">
              <ul className="desktop--navbar ml-5 text-[#69707D] flex justify-between w-[400px] ml-10 text-lg  ">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          {nav && (
            <div className="absolute z-[1]  top-0  left-0 w-[70%] h-[950px] sm:w-[50%] sm:h-[1050px] bg-white xl:hidden ">
              <img
                className="absolute top-6 left-5"
                onClick={openNav}
                src={close}
              />
              <ul className="mt-20 ml-5 font-bold h-[220px] flex flex-col justify-around text-xl ">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          )}

          {toggle ? (
            <>
              <div className="absolute top-0 left-0 w-screen h-[950px] sm:h-[1050px] bg-black opacity-90  z-[0] xl:hidden   "></div>
              <div className="flex items-center z-[1] opacity-50 ">
                <img className="mr-5" src={cart} alt="" />
                <img className="w-[30px]" src={avatar} alt="" />
              </div>

              {items > 0 ? (
                <div className="absolute top-3 right-14 bg-[#FF7E1B] px-2 text-sm rounded-lg  text-center text-white z-[10] opacity-50 ">
                  {items}
                </div>
              ) : null}
            </>
          ) : (
            <>
              <div className="absolute top-0 left-0 w-0 h-0 bg-black  z-[0]   "></div>
              <div className="flex items-center z-[1]  ">
                <img
                  className="mr-5 xl:mr-7 cursor-pointer	 "
                  src={cart}
                  alt=""
                  onClick={handleCartModal}
                />
                <img className="w-[30px] xl:w-[60px]" src={avatar} alt="" />
              </div>

              {cartModal && <Cart items={items} checkout={() => setItems(0)} />}
              {items > 0 ? (
                <div className="absolute top-3 right-14 bg-[#FF7E1B] px-2 text-sm rounded-lg  text-center text-white z-[10] xl:-top-3 xl:right-24 ">
                  {items}
                </div>
              ) : null}
            </>
          )}
        </nav>
        <div className="xl:flex mx-auto  items-center xl:w-[1200px] justify-around xl:mt-[50px]">
          <div>
            {toggle ? (
              <div className="opacity-30">
                <GalleryComponent isMobileGallery />
              </div>
            ) : (
              <GalleryComponent isMobileGallery />
            )}
            <div>
              <DesktopGallery index={index} />
            </div>
          </div>
          <div className="h-[500px] flex flex-col justify-between px-6 py-4 mt-[160px] sm:mt-[250px] sm:mx-auto sm:h-[450px] sm:w-[540px] xl:mx-0 xl:mt-0 xl:px-0 xl:w-[500px] xl:h-[450px]">
            <h1 className="text-[#FF7E1B] font-bold xl:text-xl">
              sneaker company
            </h1>
            <h1 className="text-3xl font-bold xl:text-5xl ">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-[#69707D] leading-7">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex justify-between items-center xl:flex-col xl:items-start  ">
              <div className="flex items-center justify-between w-[170px] xl:w-[200px]">
                <h1 className="text-3xl font-bold">$125.00</h1>
                <p className="text-lg inline-block  rounded-md px-2 py-1  bg-[#ffd0af] text-[#FF7E1B] font-bold xl:mt-5">
                  50%
                </p>
              </div>
              <p className="text-xl text-[#B6BCC8] line-through">$250.00</p>
            </div>
            <div className="flex flex-col justify-between h-[110px] xl:flex-row xl:h-[50px] ">
              <div className="flex justify-between items-center bg-[#F6F8FD] rounded-md h-12 xl:w-[200px] ">
                <img
                  className=" py-5 px-7 xl:px-3 cursor-pointer	"
                  src={minus}
                  alt=""
                  onClick={decrement}
                />
                <input
                  className="w-[100px] xl:w-[100px] bg-[#F6F8FD]  text-center placeholder:text-black"
                  type="number"
                  placeholder="0"
                  value={quantity}
                  onChange={handleChange}
                />
                <img
                  className=" py-5 px-7 xl:px-3 cursor-pointer	"
                  src={plus}
                  alt=""
                  onClick={increment}
                />
              </div>
              <div
                className="flex justify-center items-center bg-[#FF7E1B] h-12 rounded-md xl:w-[280px] cursor-pointer	"
                onClick={addToCart}
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#fff"
                    fillRule="nonzero"
                  />
                </svg>
                <p className="text-white ml-3">Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
