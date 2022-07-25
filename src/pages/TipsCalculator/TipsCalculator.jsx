import React from 'react';
import Header from '../../components/Header';
import './TipsCalculator.css';
import BillContainer from '././Components/BillContainer';
import logo from '../../assets/tips-calc-img/logo.svg';
import TipsContainer from '././Components/TipsContainer';
import PeopleContainer from '././Components/PeopleContainer';
import RecapContainer from '././Components/RecapContainer';
import { useEffect, useState } from 'react';

function TipsCalculator() {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);
  const [nbPeople, setNbPeople] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    if (bill > 0 && tip > 0 && nbPeople > 0) {
      setTipAmount(parseFloat((bill * tip) / 100 / nbPeople).toFixed(2));
      setTotalAmount(
        parseFloat((tipAmount * nbPeople + bill / nbPeople).toFixed(2))
      );
    }
    if (bill === 0 || tip === 0 || nbPeople === 0) {
      setTipAmount(0);
      setTotalAmount(0);
    }
  }, [bill, tip, nbPeople, tipAmount, totalAmount]);

  return (
    <div className="tips-body h-screen bg-tipsLightGrayishCyan">
      <Header title="Tips Calculator" />
      <img className="mx-auto pt-10" src={logo} alt="" />
      <form className=" bg-white mt-[100px] rounded-t-[20px] p-10 xl:w-[80%] mx-auto xl:rounded-xl 2xl:w-[1100px]   ">
        <div className="xl:flex xl:justify-between">
          <div className="xl:w-[48%]">
            <BillContainer setBill={setBill} />
            <TipsContainer setTip={setTip} />
            <PeopleContainer nbPeople={nbPeople} setNbPeople={setNbPeople} />
          </div>
          <div className="xl:w-[49%]">
            <RecapContainer
              tip={tip}
              bill={bill}
              tipAmount={tipAmount}
              nbPeople={nbPeople}
              totalAmount={totalAmount}
              setBill={setBill}
              setTip={setTip}
              setTipAmount={setTipAmount}
              setNbPeople={setNbPeople}
              setTotalAmount={setTotalAmount}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TipsCalculator;
