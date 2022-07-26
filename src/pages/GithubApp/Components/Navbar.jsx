import React from 'react';
import moon from '../../../assets/github-app-img/icon-moon.svg';

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-[900]">devifinder</h1>
      <div className="flex justify-between items-center w-[80px]">
        <p className="text-gLightDarkBlue font-[900] tracking-widest">DARK</p>
        <img src={moon} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
