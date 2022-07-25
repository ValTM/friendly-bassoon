import React from 'react';
import people from '../../assets/tips-calc-img/icon-person.svg';

function PeopleContainer() {
  return (
    <div className="mt-10 flex flex-col relative">
      <label className="text-tipsDarkCyan font-bold" htmlFor="bill">
        Number of People
      </label>
      <input
        className=" mt-2 bg-tipsWhiteColor h-12 rounded-md text-right pr-4 pl-9 text-2xl text-tipsDarkCyan font-bold focus:outline-none focus:border-tipsCyan focus:ring-tipsCyan focus:ring-2"
        type="number"
        placeholder="0"
      />
      <img
        className="absolute bottom-3 left-4 right-2 w-[15px]"
        src={people}
        alt=""
      />
    </div>
  );
}

export default PeopleContainer;
