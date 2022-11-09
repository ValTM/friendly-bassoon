import React from 'react';
import logo from '../../assets/equalizer-img/logo.svg';
import FacebookIcon from './SocialIcons/FacebookIcon';
import InstagramIcon from './SocialIcons/InstagramIcon';
import TwitterIcon from './SocialIcons/TwitterIcon';

function Footer() {
  return (
    <div className="eq--footer mt-[630px] h-[400px] px-5 py-20 md:mt-[200px] md:h-[300px] md:px-10 xl:w-[1150px] 2xl:flex 2xl:justify-between 2xl:items-center 2xl:w-[1400px] mx-auto">
      <img className=" relative h-[40px]" src={logo} alt="" />
      <div className="md:flex md:justify-between">
        <p className="mt-10 w-[260px] leading-8 md:w-[400px] md:text-lg 2xl:mt-0 2xl:w-[500px]">
          All rights reserved © Equalizer 2021 Have any problems? Contact us via
          social media or email us at{' '}
          <span className="font-bold">equalizer@example.com</span>
        </p>
        <div className="flex mt-16 justify-between w-[100px] md:h-[30px] 2xl:hidden ">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="hidden flex mt-16 justify-between w-[100px] md:h-[30px]  2xl:flex  2xl:mt-0">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
}

export default Footer;
