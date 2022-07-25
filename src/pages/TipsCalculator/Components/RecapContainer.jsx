import React from 'react';
import PropTypes from 'prop-types';

function RecapContainer({
  tip,
  bill,
  nbPeople,
  setBill,
  setTip,
  setNbPeople,
  setTipAmount,
  setTotalAmount,
  tipAmount,
  totalAmount,
}) {
  RecapContainer.propTypes = {
    tip: PropTypes.node.isRequired,
    bill: PropTypes.node.isRequired,
    nbPeople: PropTypes.node.isRequired,
    setBill: PropTypes.node.isRequired,
    setTip: PropTypes.node.isRequired,
    setNbPeople: PropTypes.node.isRequired,
    setTipAmount: PropTypes.node.isRequired,
    setTotalAmount: PropTypes.node.isRequired,
    tipAmount: PropTypes.node.isRequired,
    totalAmount: PropTypes.node.isRequired,
  };
  const handleReset = () => {
    setBill(0);
    setTip(0);
    setNbPeople(0);
    setTipAmount(0);
    setTotalAmount(0);
  };
  return (
    <div className=" bg-tipsDarkCyan mt-10 rounded-xl px-5 py-7 xl:mt-0 xl:h-[100%] xl:px-10 xl:py-10">
      <div className="flex justify-between items-center ">
        <div>
          <p className="text-xl text-tipsWhiteColor xl:text-2xl">Tip Amount</p>
          <p className="text-tipsLightGrayishCyan xl:text-xl">/ person</p>
        </div>
        {tipAmount > 0 ? (
          <p className="text-3xl text-tipsCyan font-bold xl:text-[50px]">
            ${tipAmount}
          </p>
        ) : (
          <p className="text-3xl text-tipsCyan font-bold xl:text-[50px]">
            $0.00
          </p>
        )}
      </div>
      <div className="flex justify-between items-center mt-5 xl:mt-20">
        <div>
          <p className="text-xl text-tipsWhiteColor xl:text-2xl">Total</p>
          <p className="text-tipsLightGrayishCyan xl:text-xl">/ person</p>
        </div>
        {totalAmount > 0 ? (
          <p className="text-3xl text-tipsCyan font-bold xl:text-[50px]">
            ${totalAmount}
          </p>
        ) : (
          <p className="text-3xl text-tipsCyan font-bold xl:text-[50px]">
            $0.00
          </p>
        )}
      </div>
      {tipAmount > 0 &&
      totalAmount > 0 &&
      bill != null &&
      tip != null &&
      nbPeople != null ? (
        <button
          className=" mt-7 py-3 w-[100%] bg-tipsCyan rounded-lg text-2xl text-tipsDarkCyan font-bold tracking-widest text-center hover:bg-tipsLightGrayishCyan xl:mt-40"
          onClick={handleReset}
        >
          RESET
        </button>
      ) : (
        <button
          className=" mt-7 py-3 w-[100%] bg-[#0D686D] rounded-lg text-2xl text-tipsDarkCyan font-bold tracking-widest text-center hover:bg-tipsLightGrayishCyan xl:mt-40"
          onClick={handleReset}
        >
          RESET
        </button>
      )}
    </div>
  );
}

export default RecapContainer;
