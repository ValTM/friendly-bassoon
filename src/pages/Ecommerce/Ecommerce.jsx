import React from 'react';
import Header from '../../components/Header';
import hamburger from '../../assets/ecommerce-img/icon-menu.svg';
import close from '../../assets/ecommerce-img/icon-close.svg';
import cart from '../../assets/ecommerce-img/icon-cart.svg';
import avatar from '../../assets/ecommerce-img/image-avatar.png';
import logo from '../../assets/ecommerce-img/logo.svg';
import { useState } from 'react';
import './Ecommerce.css';
import produc1 from '../../assets/ecommerce-img/image-product-1.jpg';
import produc2 from '../../assets/ecommerce-img/image-product-2.jpg';
import produc3 from '../../assets/ecommerce-img/image-product-3.jpg';
import produc4 from '../../assets/ecommerce-img/image-product-4.jpg';
import previous from '../../assets/ecommerce-img/icon-previous.svg';
import next from '../../assets/ecommerce-img/icon-next.svg';

function Ecommerce() {
  const [nav, showNav] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [index, setIndex] = useState(0);
  const images = [produc1, produc2, produc3, produc4];

  const openNav = () => {
    showNav(!nav);
    toggle ? setToggle(false) : setToggle(true);
  };

  const slideNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const slidePrev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <Header title="Ecommerce" />
      <div className="ec--body ">
        <nav className="relative flex justify-between items-center h-[60px]  px-5">
          <div className="flex items-center justify-between w-[150px] z-[1]    ">
            <img onClick={openNav} src={hamburger} alt="" />
            <img className="ml-2" src={logo} alt="" />
          </div>
          {nav && (
            <div className="absolute z-[1]  top-0  left-0 w-[70%] h-screen bg-white ">
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
              <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-90  z-[0]   "></div>
              <div className="flex items-center z-[1] opacity-50 ">
                <img className="mr-5" src={cart} alt="" />
                <img className="w-[30px]" src={avatar} alt="" />
              </div>
            </>
          ) : (
            <>
              <div className="absolute top-0 left-0 w-0 h-0 bg-black  z-[0]   "></div>
              <div className="flex items-center z-[1]  ">
                <img className="mr-5" src={cart} alt="" />
                <img className="w-[30px]" src={avatar} alt="" />
              </div>
            </>
          )}
        </nav>
        {toggle ? (
          <div>
            <img className="" src={images[index]} alt="" />
            <div className="absolute top-[40%] left-0 flex w-screen justify-between">
              <img
                className="bg-white rounded-full px-4 py-3 ml-2 "
                src={previous}
                onClick={slidePrev}
              />
              <img
                className="opacity-50 bg-white rounded-full px-4 py-3 mr-2 "
                src={next}
                onClick={slideNext}
              />
            </div>
          </div>
        ) : (
          <div>
            <img className="" src={images[index]} alt="" />
            <div className="absolute top-[40%] left-0 flex w-screen justify-between">
              <img
                className="bg-white rounded-full px-4 py-3 ml-2 "
                src={previous}
                onClick={slidePrev}
              />
              <img
                className=" bg-white rounded-full px-4 py-3 mr-2 "
                src={next}
                onClick={slideNext}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ecommerce;
