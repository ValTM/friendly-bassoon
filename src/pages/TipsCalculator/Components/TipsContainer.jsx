import React, { useImperativeHandle, useRef } from 'react';
import { blockInvalidChar } from '../invalidChar';
import PropTypes from 'prop-types';

function TipsContainer({ setTip }, ref) {
  TipsContainer.propTypes = {
    setTip: PropTypes.any,
  };
  const containerRef = useRef();
  const inputRef = useRef();

  const handleButtonClick = (value) => {
    setTip(value);
    const selectedButton = Array.from(containerRef.current.children).find(
      (btn) =>
        btn.tagName.toLowerCase() === 'button' &&
        btn.classList.contains('bg-tipsCyan')
    );
    selectedButton?.classList.remove('bg-tipsCyan');
    selectedButton?.classList.add('bg-tipsDarkCyan');
  };
  const buttonValues = [5, 10, 15, 25, 50];

  const maxLengthCheck = (event) => {
    const eventTarget = event.target;

    if (eventTarget.value.length > eventTarget.maxLength) {
      eventTarget.value = eventTarget.value.slice(1, eventTarget.maxLength);
    }
    if (eventTarget.value > 100) {
      eventTarget.value = null;
    }
  };

  useImperativeHandle(ref, () => ({
    resetFields() {
      Array.from(containerRef.current.children).forEach((btn) => {
        if (btn.tagName.toLowerCase() === 'button') {
          btn.classList.remove('bg-tipsCyan');
          btn.classList.add('bg-tipsDarkCyan');
        }
      });
      inputRef.current.value = '';
    },
  }));

  return (
    <div className="mt-10">
      <label className="text-tipsDarkCyan font-bold" htmlFor="tip">
        Select Tip %
      </label>
      <div ref={containerRef} className="flex flex-wrap justify-between mt-2">
        {buttonValues.map((value, i) => {
          return (
            <React.Fragment key={i}>
              <button
                className="my-2 w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan"
                onClick={(e) => {
                  e.preventDefault();
                  handleButtonClick(value);
                  e.target.classList.add('bg-tipsCyan');
                }}
              >
                {value}%
              </button>
            </React.Fragment>
          );
        })}
        <input
          ref={inputRef}
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

export default React.forwardRef(TipsContainer);
