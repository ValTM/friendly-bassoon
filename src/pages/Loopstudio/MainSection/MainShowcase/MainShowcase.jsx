import React from 'react';
import avatar from '../../../../assets/loopstudios-img/desktop/image-interactive.jpg';
import './MainShowcase.css';

function MainShowcase() {
  return (
    <div className="showcase--box mx-auto mt-20 lg:flex lg:relative">
      <img className="avatar mx-auto lg:ml-20 " src={avatar} alt="" />
      <div className="showcase--text text-center lg:absolute lg:bg-white lg:top-16 lg:right-20 lg:p-10">
        <h1 className="text-3xl uppercase mt-10">
          The leader in interactive VR
        </h1>
        <p className="mt-5 mx-auto text-loopDarkGray ">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

export default MainShowcase;
