import React, { useRef, useImperativeHandle } from 'react';
import dollar from '../../../assets/tips-calc-img/icon-dollar.svg';
import { blockInvalidChar } from '../invalidChar';
import PropTypes from 'prop-types';

function BillContainer({ setBill }, ref) {
  BillContainer.propTypes = {
    setBill: PropTypes.func,
  };

  const billRef = useRef(0);

  useImperativeHandle(ref, () => ({
    resetFields() {
      billRef.current.value = '';
    },
  }));
  return (
    <div className="flex flex-col relative">
      <label className="text-tipsDarkCyan font-bold" htmlFor="bill">
        Bill
      </label>
      <input
        ref={billRef}
        className="mt-2 bg-tipsWhiteColor h-12 rounded-md text-right pr-4 pl-9 text-2xl text-tipsDarkCyan font-bold focus:outline-none focus:border-tipsCyan focus:ring-tipsCyan focus:ring-2"
        type="number"
        placeholder="0"
        min={0}
        onKeyDown={blockInvalidChar}
        required
        onChange={(e) => setBill(parseFloat(e.target.value))}
      />
      <img
        className="absolute bottom-3 left-4 right-2 w-[15px]"
        src={dollar}
        alt=""
      />
    </div>
  );
}

export default React.forwardRef(BillContainer);
