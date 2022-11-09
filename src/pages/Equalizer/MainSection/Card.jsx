import React from 'react';

import apple from '../../../assets/equalizer-img/icon-apple.svg';
import android from '../../../assets/equalizer-img/icon-android.svg';

function Card() {
  return (
    <div className="card bg-eqOrange absolute top-[450px] rounded-t-xl-mt-3 px-8 py-12 z-20 sm:rounded-xl md:w-[470px] md:right-20 md:top-[170px] 2xl:right-[200px]">
      <h1 className="text-eqWhite text-3xl font-bold">Premium EQ</h1>
      <p className="text-eqWhite mt-10 leading-9 text-[20px]">
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <div className="flex items-center text-eqWhite mt-5">
        <h1 className="text-[60px] font-bold">$4</h1>
        <p className="ml-4 text-xl">/ month</p>
      </div>
      <div className="flex flex-col mt-5">
        <button className="flex justify-center items-center bg-eqBlack text-eqWhite rounded-lg h-16 font-bold text-xl hover:bg-eqGreen hover:text-eqWhite">
          <img className="mr-2" src={apple} alt="" /> iOS Download
        </button>
        <button className="flex justify-center items-center bg-eqWhite text-eqBlack rounded-lg h-16 mt-4 font-bold text-xl hover:bg-eqYellow hover:text-eqBlack">
          <img className="mr-2" src={android} alt="" /> Android Download
        </button>
      </div>
    </div>
  );
}

export default Card;
