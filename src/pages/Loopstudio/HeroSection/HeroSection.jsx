import React from 'react';
import { useState } from 'react';
import logo from '../../../assets/loopstudios-img/logo.svg';
import hamburger from '../../../assets/loopstudios-img/icon-hamburger.svg';
import close from '../../../assets/loopstudios-img/icon-close.svg';
import './HeroSection.css';

function HeroSection() {
  const [nav, showNav] = useState(false);
  const handleNav = () => {
    showNav(!nav);
  };
  const listItems = [
    { li: 'About' },
    { li: 'Careers' },
    { li: 'Events' },
    { li: 'Products' },
    { li: 'Support' },
  ];
  return (
    <div className="hero--section relative ">
      {nav && (
        <nav className="flex pt-2 justify-between px-3 items-center  ">
          <img className="z-10" src={logo} alt="" />
          <img
            className="h-4 cursor-pointer"
            onClick={handleNav}
            src={close}
            alt=""
          />
          <img
            className="close--btn cursor-pointer "
            onClick={handleNav}
            src={close}
            alt=""
          />
          <ul className="mobile--nav absolute top-0 left-0  flex flex-col justify-center text-3xl uppercase pl-4 tracking-widest bg-black text-white  ">
            {listItems.map((text, i) => {
              return (
                <React.Fragment key={i}>
                  <li className="cursor-pointer">{text.li}</li>
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      )}
      <nav className="flex pt-2 justify-between px-3 items-center md:pt-6 md:px-10 lg:px-20 ">
        <img className="" src={logo} alt="" />
        <img
          className="h-4 md:hidden"
          onClick={handleNav}
          src={hamburger}
          alt=""
        />
        <ul className=" dekstop--nav hidden md:flex text-xl text-white mr-2 ">
          {listItems.map((text, i) => {
            return (
              <React.Fragment key={i}>
                <li className="cursor-pointer">{text.li}</li>
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
      <div className="hero--text mt-40  ">
        <p className="text-white text-4xl p-4 border-2 border-white uppercase m-2 md:text-5xl md:ml-10 lg:ml-20 ">
          Immersive experiences that deliver
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
