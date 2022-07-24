import React from 'react';
import logo from '../../../assets/equalizer-img/logo.svg';
import mobileBgPattern from '../../../assets/equalizer-img/bg-main-mobile.png';
import tabletBgPattern from '../../../assets/equalizer-img/bg-main-tablet.png';
import desktopPattern from '../../../assets/equalizer-img/bg-main-tablet.png';
import bgPattern1 from '../../../assets/equalizer-img/bg-pattern-1.svg';
import './HeroSection.css';

function HeroSection() {
  return (
    <div>
      <div>
        <img
          id="logo"
          className="mt-10 ml-5 md:mt-20 md:ml-10 xl:ml-[100px]"
          src={logo}
          alt=""
        />
        <img
          className=" absolute top-0 z-[-1] right-0 md:hidden  "
          src={mobileBgPattern}
          alt=""
        />
        <img
          className=" hidden absolute  top-[-200px] z-[-1] left-[-100px] md:block xl:hidden  "
          src={tabletBgPattern}
          alt=""
        />
        <img
          className=" hidden absolute top-[-250px] left-[-100px] z-[-1] l xl:block  "
          src={desktopPattern}
          alt=""
        />
        <img
          id="pattern1"
          className="hidden md:block absolute top-[-80px] right-0 w-[280px]"
          src={bgPattern1}
          alt=""
        />
      </div>
      <div className="mt-20 ml-5">
        <h1
          id="hero--h1"
          className="text-[50px] font-bold text-eqBlack md:text-[60px] md:ml-5 md:w-[500px] lg:w-[600px] xl:text-[88px] xl:ml-20 xl:w-[1000px]"
        >
          We make your music sound extraordinary.
        </h1>
        <p
          id="hero--p"
          className="mt-5 leading-[34px] md:ml-5 md:w-[500px] text-[20px] leading-[40px] lg:w-[700px] xl:ml-20 xl:w-[800px]"
        >
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
