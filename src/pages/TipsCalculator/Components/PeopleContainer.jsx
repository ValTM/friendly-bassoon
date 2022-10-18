import React from 'react';
import people from '../../../assets/tips-calc-img/icon-person.svg';
import { blockInvalidChar } from '../invalidChar';
import PropTypes from 'prop-types';

function PeopleContainer({ nbPeople, setNbPeople }) {
  return (
    <div className="mt-10 flex flex-col relative">
      <div>
        <label className="text-tipsDarkCyan font-bold" htmlFor="bill">
          Number of People
        </label>
        <input
          className={`mt-2 w-[100%] bg-tipsWhiteColor h-12 rounded-md text-right pr-4 pl-9 text-2xl text-tipsDarkCyan font-bold focus:outline-none ${
            nbPeople === 0
              ? 'focus:border-[#e11d48] focus:ring-[#e11d48]'
              : 'focus:border-tipsCyan focus:ring-tipsCyan'
          } focus:ring-2`}
          type="number"
          placeholder="0"
          min={0}
          onKeyDown={blockInvalidChar}
          required
          onChange={(e) => setNbPeople(parseFloat(e.target.value))}
        />
        {nbPeople === 0 && (
          <p className="absolute right-2 -top-5 text-[#e11d48] font-bold text-md sm:top-0">
            Can&apos;t be zero
          </p>
        )}
        <img
          className="absolute bottom-3 left-4 right-2 w-[15px]"
          src={people}
          alt=""
        />
      </div>
    </div>
  );
}

PeopleContainer.propTypes = {
  nbPeople: PropTypes.any,
  setNbPeople: PropTypes.any,
};

export default PeopleContainer;
