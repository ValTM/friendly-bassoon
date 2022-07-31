import React from 'react';
import Header from '../../components/Header';
import hamburger from '../../assets/ecommerce-img/icon-menu.svg';
import close from '../../assets/ecommerce-img/icon-close.svg';
import cart from '../../assets/ecommerce-img/icon-cart.svg';
import avatar from '../../assets/ecommerce-img/image-avatar.png';
import logo from '../../assets/ecommerce-img/logo.svg';
import { useState } from 'react';
import './Ecommerce.css';
import MobileGallery from './Components/MobileGallery';

function Ecommerce() {
  const [nav, showNav] = useState(false);

  let overlay = document.getElementById('overlay');
  let account = document.getElementById('account');
  let arrow = document.getElementById('arrow');
  const openNav = () => {
    showNav(!nav);
    overlay.classList.remove('w-0', 'h-0', 'opacity-0');
    overlay.classList.add('w-screen', 'h-screen', 'opacity-80');
    account.classList.add('opacity-30');
    arrow.classList.add('opacity-30');
  };

  const hideNav = () => {
    !showNav(!nav);
    overlay.classList.remove('w-screen', 'h-screen', 'opactiy-80');
    overlay.classList.add('w-0', 'h-0', 'opacity-0');
    account.classList.remove('opacity-30');
    arrow.classList.remove('opacity-30');
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
                onClick={hideNav}
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
          <div id="account" className="flex items-center z-[1]  ">
            <img className="mr-5" src={cart} alt="" />
            <img className="w-[30px]" src={avatar} alt="" />
          </div>
          <div
            id="overlay"
            className="absolute top-0 left-0 w-0 h-0 bg-black  z-[0]   "
          ></div>
        </nav>
        <MobileGallery />
      </div>
    </div>
  );
}

export default Ecommerce;
