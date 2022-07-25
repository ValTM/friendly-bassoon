import React from 'react';
import dollar from '../../assets/tips-calc-img/icon-dollar.svg';

function BillContainer() {
  return (
    <div className="flex flex-col relative">
      <label className="text-tipsDarkCyan font-bold" htmlFor="bill">
        Bill
      </label>
      <input
        className=" mt-2 bg-tipsWhiteColor h-12 rounded-md text-right pr-4 text-2xl text-tipsDarkCyan font-bold"
        type="number"
        placeholder="0"
      />
      <img
        className="absolute bottom-3 left-4 right-2 w-[15px]"
        src={dollar}
        alt=""
      />
    </div>
  );
}

export default BillContainer;
