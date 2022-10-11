import React from 'react';
import { blockInvalidChar } from '../invalidChar';
import PropTypes from 'prop-types';
// import { useRef } from 'react';

function TipsContainer({ setTip }) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    setTip(parseInt(e.target.value));
    const btn = document.getElementById(e.target.id);
    let btns = Array.from(document.getElementById('btn--container').children);
    for (let btn of btns) {
      if (btn.classList.contains('bg-tipsCyan')) {
        btn.classList.remove('bg-tipsCyan');
        btn.classList.add('bg-tipsDarkCyan');
      }
    }
    btn.classList.add('bg-tipsCyan');
  };
  const buttonValues = [
    { value: 5, id: 1 },
    { value: 10, id: 2 },
    { value: 15, id: 3 },
    { value: 25, id: 4 },
    { value: 50, id: 5 },
  ];

  const maxLengthCheck = (event) => {
    const eventTarget = event.target;

    if (eventTarget.value.length > eventTarget.maxLength) {
      eventTarget.value = eventTarget.value.slice(1, eventTarget.maxLength);
    }
    if (eventTarget.value > 100) {
      eventTarget.value = null;
    }
  };
  return (
    <div className="mt-10">
      <label className="text-tipsDarkCyan font-bold" htmlFor="tip">
        Select Tip %
      </label>
      <div id="btn--container" className=" flex flex-wrap justify-between mt-2">
        {buttonValues.map((data, i) => {
          return (
            <React.Fragment key={i}>
              <button
                // ref={btn}
                id={data.id}
                className="my-2  w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan"
                value={data.value}
                onClick={handleButtonClick}
              >
                {data.value}%
              </button>
            </React.Fragment>
          );
        })}
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

TipsContainer.propTypes = {
  setTip: PropTypes.any,
};

export default TipsContainer;
