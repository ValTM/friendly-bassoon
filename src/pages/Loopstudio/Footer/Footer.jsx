import React from 'react';
import './Footer.css';
import logo from '../../../assets/loopstudios-img/logo.svg';
import fb from '../../../assets/loopstudios-img/icon-facebook.svg';
import twitter from '../../../assets/loopstudios-img/icon-twitter.svg';
import pint from '../../../assets/loopstudios-img/icon-pinterest.svg';
import insta from '../../../assets/loopstudios-img/icon-instagram.svg';

function Footer() {
  const listItems = [
    { li: 'About' },
    { li: 'Careers' },
    { li: 'Events' },
    { li: 'Products' },
    { li: 'Support' },
  ];

  const imgList = [
    { img: fb },
    { img: twitter },
    { img: pint },
    { img: insta },
  ];
  return (
    <div className="footer mt-40 bg-black lg:flex justify-between  content-center ">
      <div>
        <img className="mx-auto pt-10 lg:ml-0" src={logo} alt="" />
        <ul className="footer--nav mt-10 flex flex-col text-center text-white text-2xl lg:flex-row">
          {listItems.map((text, i) => {
            return (
              <React.Fragment key={i}>
                <li className="cursor-pointer">{text.li}</li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className="footer--nav--socials mt-10 flex justify-center lg:justify-end">
          {imgList.map((image, i) => {
            return (
              <React.Fragment key={i}>
                <li>
                  <img src={image.img} className="cursor-pointer" />
                </li>
              </React.Fragment>
            );
          })}
        </ul>
        <p className="text-center text-white mt-10">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
