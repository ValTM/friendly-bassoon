import React from 'react';

function TipsContainer() {
  return (
    <div className="mt-10">
      <label className="text-tipsDarkCyan font-bold" htmlFor="tip">
        Select Tip %
      </label>
      <div className="flex flex-wrap justify-between mt-2">
        <div className=" my-2  w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan">
          5%
        </div>
        <div className="my-2  w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan">
          10%
        </div>
        <div className="my-2  w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan">
          15%
        </div>
        <div className="my-2  w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan">
          25%
        </div>
        <div className="my-2  w-[49%] py-2 bg-tipsDarkCyan text-tipsWhiteColor text-center text-2xl rounded-lg font-bold hover:bg-tipsCyan hover:text-tipsDarkCyan">
          50%
        </div>
        <input
          className="my-2  w-[49%] py-2 bg-tipsWhiteColor text-tipsDarkCyan text-center text-2xl rounded-lg font-bold text-right pr-2 pl-2 focus:outline-none focus:border-tipsCyan focus:ring-tipsCyan focus:ring-2 xl:pr-4"
          placeholder="Custom"
        />
      </div>
    </div>
  );
}

export default TipsContainer;
