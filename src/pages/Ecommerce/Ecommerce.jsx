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
  const [toggle, setToggle] = useState(false);
  const [index] = useState(0);
  const [items, setItems] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cartModal, setCartModal] = useState(false);

  const openNav = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity === 0 ? 0 : quantity - 1);
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
  const listItems = [
    { li: 'Collections' },
    { li: 'Men' },
    { li: 'Women' },
    { li: 'About' },
    { li: 'Contact' },
  ];

  return (
    <div>
      <Header title="Ecommerce" />
      <nav className="font-sans relative flex justify-between items-center h-[60px]  px-5  xl:border-b xl:mt-10 xl:pb-10 xl:w-[1200px] xl:mx-auto 2xl:w-[1350px] ">
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
              {listItems.map((listItem, i) => {
                return (
                  <React.Fragment key={i}>
                    <li className="cursor-pointer">{listItem.li}</li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>

        {toggle ? (
          <>
            <div className="absolute z-[1]  top-0  left-0 w-[70%] h-[950px] sm:w-[50%] sm:h-[1050px] bg-white xl:hidden ">
              <img
                className="absolute top-6 left-5"
                onClick={openNav}
                src={close}
              />
              <ul className="mt-20 ml-5 font-bold h-[220px] flex flex-col justify-around text-xl ">
                {listItems.map((listItem, i) => {
                  return (
                    <React.Fragment key={i}>
                      <li className="cursor-pointer">{listItem.li}</li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
            <div className="absolute top-0 left-0 w-screen h-[950px] sm:h-[1050px] bg-black opacity-90  z-[0] xl:hidden   "></div>
            <div className="flex items-center z-[1] opacity-50 ">
              <img className="mr-5" src={cart} alt="" />
              <img className="w-[30px]" src={avatar} alt="" />
            </div>

            {items > 0 && (
              <div className="absolute top-3 right-14 bg-[#FF7E1B] px-2 text-sm rounded-lg  text-center text-white z-[10] opacity-50 ">
                {items}
              </div>
            )}
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
            {items > 0 && (
              <div className="absolute top-3 right-14 bg-[#FF7E1B] px-2 text-sm rounded-lg  text-center text-white z-[10] xl:-top-3 xl:right-24 ">
                {items}
              </div>
            )}
          </>
        )}
      </nav>
      <div className="xl:flex mx-auto  items-center xl:w-[1200px] justify-around xl:mt-[50px]">
        <div>
          <div className={`${toggle ? 'opacity-30' : ''}`}>
            <GalleryComponent isMobileGallery />
          </div>
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
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
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
              <p className="text-white ml-3">Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
