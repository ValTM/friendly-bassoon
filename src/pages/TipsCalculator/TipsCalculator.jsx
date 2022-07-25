import React from 'react';
import Header from '../../components/Header';
import './TipsCalculator.css';
import BillContainer from './BillContainer';
import logo from '../../assets/tips-calc-img/logo.svg';
import TipsContainer from './TipsContainer';
import PeopleContainer from './PeopleContainer';
import RecapContainer from './RecapContainer';

function TipsCalculator() {
  return (
    <div className="tips-body h-screen bg-tipsLightGrayishCyan">
      <Header title="Tips Calculator" />
      <img className="mx-auto pt-10" src={logo} alt="" />
      <form className=" bg-white mt-[100px] rounded-t-[20px] p-10 xl:w-[80%] mx-auto xl:rounded-xl 2xl:w-[65%]   ">
        <div className="xl:flex xl:justify-between">
          <div className="xl:w-[48%]">
            <BillContainer />
            <TipsContainer />
            <PeopleContainer />
          </div>
          <div className="xl:w-[49%]">
            <RecapContainer />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TipsCalculator;
