import React from 'react';

function RecapContainer() {
  return (
    <div className=" bg-tipsDarkCyan mt-10 rounded-xl px-5 py-7">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl text-tipsWhiteColor">Tip Amount</p>
          <p className="text-tipsLightGrayishCyan">/ person</p>
        </div>
        <p className="text-3xl text-tipsCyan font-bold">$4.27</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <p className="text-xl text-tipsWhiteColor">Total</p>
          <p className="text-tipsLightGrayishCyan">/ person</p>
        </div>
        <p className="text-3xl text-tipsCyan font-bold">$32.27</p>
      </div>
      <button className=" mt-7 py-3 w-[100%] bg-tipsCyan rounded-lg text-2xl text-tipsDarkCyan font-bold tracking-widest text-center hover:bg-tipsLightGrayishCyan">
        RESET
      </button>
    </div>
  );
}

export default RecapContainer;
