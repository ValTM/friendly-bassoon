import React from 'react';

function RecapContainer() {
  return (
    <div className=" bg-tipsDarkCyan mt-10 rounded-xl px-5 py-7 xl:mt-0 xl:h-[100%] xl:px-10 xl:py-10">
      <div className="flex justify-between items-center ">
        <div>
          <p className="text-xl text-tipsWhiteColor xl:text-2xl">Tip Amount</p>
          <p className="text-tipsLightGrayishCyan xl:text-xl">/ person</p>
        </div>
        <p className="text-3xl text-tipsCyan font-bold xl:text-[50px]">$4.27</p>
      </div>
      <div className="flex justify-between items-center mt-5 xl:mt-20">
        <div>
          <p className="text-xl text-tipsWhiteColor xl:text-2xl">Total</p>
          <p className="text-tipsLightGrayishCyan xl:text-xl">/ person</p>
        </div>
        <p className="text-3xl text-tipsCyan font-bold xl:text-[50px]">
          $32.27
        </p>
      </div>
      <button className=" mt-7 py-3 w-[100%] bg-tipsCyan rounded-lg text-2xl text-tipsDarkCyan font-bold tracking-widest text-center hover:bg-tipsLightGrayishCyan xl:mt-40">
        RESET
      </button>
    </div>
  );
}

export default RecapContainer;
