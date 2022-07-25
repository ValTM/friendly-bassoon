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
    <>
      <Header title="Tips Calculator" />
      <div className="tips-body h-[100%] w-[100%] bg-tipsLightGrayishCyan">
        <img className="mx-auto pt-20" src={logo} alt="" />
        <form className=" bg-white mt-20 rounded-t-[20px] p-10">
          <BillContainer />
          <TipsContainer />
          <PeopleContainer />
          <RecapContainer />
        </form>
      </div>
    </>
  );
}

export default TipsCalculator;
