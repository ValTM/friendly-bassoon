import React from 'react';
import { blockInvalidChar } from '../invalidChar';
import PropTypes from 'prop-types';

function TipsContainer({ setTip }) {
  TipsContainer.propTypes = {
    setTip: PropTypes.node.is,
  };
  const maxLengthCheck = (event) => {
    if (event.target.value.length > event.target.maxLength) {
      event.target.value = event.target.value.slice(1, event.target.maxLength);
    }
    if (event.target.value > 100) {
      event.target.value = 0;
    }
  };
  return (
    <div className="mt-10">
      <label className="text-tipsDarkCyan font-bold" htmlFor="tip">
        Select Tip %
      </label>
      <div className="flex flex-wrap justify-between mt-2">
        <button
          className=" my-2  w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan "
          value={5}
          onClick={(e) => setTip(parseInt(e.target.value))}
        >
          5%
        </button>
        <button
          className="my-2  w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan"
          value={10}
          onClick={(e) => setTip(parseInt(e.target.value))}
        >
          10%
        </button>
        <button
          className="my-2  w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan"
          value={15}
          onClick={(e) => setTip(parseInt(e.target.value))}
        >
          15%
        </button>
        <button
          className="my-2  w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan"
          value={25}
          onClick={(e) => setTip(parseInt(e.target.value))}
        >
          25%
        </button>
        <button
          className="my-2  w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan"
          value={50}
          onClick={(e) => setTip(parseInt(e.target.value))}
        >
          50%
        </button>
        <input
          className="my-2  w-[49%] py-2 bg-tipsWhiteColor text-tipsDarkCyan text-center text-2xl rounded-lg font-bold text-right pr-2 pl-2 focus:outline-none focus:border-tipsCyan focus:ring-tipsCyan focus:ring-2 xl:pr-4"
          placeholder="Custom"
          type="tel"
          onKeyDown={blockInvalidChar}
          maxLength="3"
          onInput={maxLengthCheck}
          onChange={(e) => setTip(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}

export default TipsContainer;
