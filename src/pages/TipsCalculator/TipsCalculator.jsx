import React from 'react';
import Header from '../../components/Header';
import './TipsCalculator.css';

function TipsCalculator() {
  return (
    <>
      <Header title="Tips Calculator" />
      <div className="tips-body h-[100%] w-[100%] bg-tipsLightGrayishCyan">
        <h1 className="text-center tracking-[10px] font-bold text-tipsDarkCyan text-2xl pt-[100px]">
          SPLI <br /> TTER
        </h1>
        <form className="h-[700px] bg-white mt-20 rounded-t-[20px]"></form>
      </div>
    </>
  );
}

export default TipsCalculator;
