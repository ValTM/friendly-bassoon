import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import './TipsCalculator.css';
import BillContainer from '././Components/BillContainer';
import logo from '../../assets/tips-calc-img/logo.svg';
import TipsContainer from '././Components/TipsContainer';
import PeopleContainer from '././Components/PeopleContainer';
import RecapContainer from '././Components/RecapContainer';

function TipsCalculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [nbPeople, setNbPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const tipsRef = useRef();
  const billRef = useRef();
  const peopleRef = useRef();

  useEffect(() => {
    if (bill > 0 && tip > 0 && nbPeople > 0) {
      setTipAmount(Number(((bill * tip) / 100 / nbPeople).toFixed(2)));
      setTotalAmount(
        parseFloat((tipAmount * nbPeople + bill / nbPeople).toFixed(2))
      );
    }
    if (!bill || !tip || !nbPeople) {
      setTipAmount(0);
      setTotalAmount(0);
    }
  }, [bill, tip, nbPeople, tipAmount, totalAmount]);

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setNbPeople(0);
    setTipAmount(0);
    setTotalAmount(0);
    tipsRef.current.resetFields();
    billRef.current.resetFields();
    peopleRef.current.resetFields();
  };

  return (
    <div className="tips-body h-screen bg-tipsLightGrayishCyan">
      <Header title="Tips Calculator" />
      <img className="mx-auto pt-10" src={logo} alt="" />
      <form className="bg-white mt-[100px] rounded-t-[20px] p-10 xl:w-[80%] mx-auto xl:rounded-xl 2xl:w-[1100px]">
        <div className="xl:flex xl:justify-between">
          <div className="xl:w-[48%]">
            <BillContainer ref={billRef} setBill={setBill} />
            <TipsContainer ref={tipsRef} setTip={setTip} />
            <PeopleContainer
              ref={peopleRef}
              nbPeople={nbPeople}
              setNbPeople={setNbPeople}
            />
          </div>
          <div className="xl:w-[49%]">
            <RecapContainer
              tip={tip}
              bill={bill}
              tipAmount={tipAmount.toString()}
              nbPeople={nbPeople}
              totalAmount={totalAmount.toString()}
              reset={handleReset}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TipsCalculator;
