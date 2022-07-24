import React from 'react';
import bgPattern2 from '../../../assets/equalizer-img/bg-pattern-2.svg';
import phone from '../../../assets/equalizer-img/illustration-app.png';
import Card from './Card';

function MainSection() {
  return (
    <>
      <div className="eq--main--section h-[450px] bg-eqBlack mt-40 relative rounded-t-xl md:h-[650px] xl:w-[1100px] mx-auto xl:mt-80 2xl:w-[1350px]">
        <img
          className="w-[250px] z-[1]  absolute top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-1/4 xl:w-[320px] xl:-ml-[50px] 2xl:ml-[20px] "
          src={phone}
          alt=""
        />
        <img
          className="absolute z-[0] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5 md:top-[170px] xl:mt-20 xl:-ml-[90px] 2xl:-ml-[50px] "
          src={bgPattern2}
          alt=""
        />
        <Card />
      </div>
    </>
  );
}

export default MainSection;
