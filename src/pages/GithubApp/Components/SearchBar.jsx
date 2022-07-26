import React from 'react';
import search from '../../../assets/github-app-img/icon-search.svg';

function SearchBar() {
  return (
    <div className="mt-10 relative bg-white rounded-xl shadow-xl">
      <input
        className="  bg-white h-16 rounded-xl   w-[100%] placeholder:text-gLightDarkBlue pl-10 text-sm"
        placeholder="Search GitHub username.. "
      />
      <img className="absolute bottom-5 left-2" src={search} alt="" />
      <button className="absolute right-2 bottom-2 bg-gLightBlue text-white p-3 rounded-xl">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
