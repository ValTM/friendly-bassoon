import React from 'react';
import './Footer.css';
import logo from '../../../assets/loopstudios-img/logo.svg';
import fb from '../../../assets/loopstudios-img/icon-facebook.svg';
import twitter from '../../../assets/loopstudios-img/icon-twitter.svg';
import pint from '../../../assets/loopstudios-img/icon-pinterest.svg';
import insta from '../../../assets/loopstudios-img/icon-instagram.svg';

function Footer() {
  return (
    <div className="footer mt-40 bg-black lg:flex justify-between  content-center ">
      <div>
        <img className="mx-auto pt-10 lg:ml-0" src={logo} alt="" />
        <ul className=" mt-10 flex flex-col text-center text-white text-2xl lg:flex-row">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>
      <div>
        <ul className=" socials mt-10 flex justify-center lg:justify-end">
          <li>
            <img src={fb} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
          <li>
            <img src={pint} alt="" />
          </li>
          <li>
            <img src={insta} alt="" />
          </li>
        </ul>
        <p className="text-center text-white mt-10">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
