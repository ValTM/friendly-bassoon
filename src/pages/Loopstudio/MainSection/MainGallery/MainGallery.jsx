import React from 'react';
import './MainGallery.css';
import ShowcaseCard from './ShowcaseCard';

function MainGallery() {
  return (
    <div className=" mt-20">
      <h1 className="text-center gallery--text text-2xl uppercase lg:hidden ">
        Our Creations
      </h1>
      <div className=" gallery--nav hidden mx-20 lg:flex lg:justify-between">
        <h1 className="text-center gallery--text text-2xl uppercase ">
          Our Creations
        </h1>
        <a
          className="border-2 border-black px-5 py-1 text-2xl uppercase tracking-widest hover:bg-black hover:text-white hover:border-2 duration-300 "
          href=""
        >
          See All
        </a>
      </div>
      <div className="items justify-center grid mt-10 gap-x-14 gap-y-8 lg:flex flex-wrap ">
        <ShowcaseCard
          cardClassName="loop-earth item "
          textClassName="items-text absolute bottom-2 left-5 text-white uppercase text-2xl lg:text-3xl lg:bottom-4 "
          text1="deep"
          text2="earth"
        />
        <ShowcaseCard
          cardClassName="loop-night item "
          textClassName="items-text absolute bottom-2 left-5 text-white uppercase text-2xl lg:text-3xl lg:bottom-4"
          text1="night"
          text2="arcade"
        />
        <ShowcaseCard
          cardClassName="loop-soccer item"
          textClassName="items-text absolute bottom-2 left-5 text-white uppercase text-2xl lg:text-3xl lg:bottom-4"
          text1="soccer"
          text2="team vr"
        />
        <ShowcaseCard
          cardClassName="loop-thegrid item"
          textClassName="items-text absolute bottom-2 left-5 text-white uppercase text-2xl lg:text-3xl lg:bottom-4"
          text1="the"
          text2="grid"
        />
        <ShowcaseCard
          cardClassName="loop-from-above item"
          textClassName="items-text absolute bottom-2 left-5 text-white uppercase text-2xl lg:text-3xl lg:bottom-4"
          text1="from up"
          text2="above vr"
        />
        <ShowcaseCard
          cardClassName="loop-pocket item"
          textClassName="items-text absolute bottom-2 left-5 text-white uppercase text-2xl lg:text-3xl lg:bottom-4"
          text1="pocket"
          text2="borealis"
        />
        <ShowcaseCard
          cardClassName="loop-curiosity item"
          textClassName="items-text absolute bottom-2 left-5 text-white uppercase text-2xl lg:text-3xl lg:bottom-4"
          text1="the"
          text2="curiosity"
        />
        <ShowcaseCard
          cardClassName="loop-eye item"
          textClassName="items-text absolute bottom-2 left-5 text-white uppercase text-2xl lg:text-3xl lg:bottom-4"
          text1="make it"
          text2="fisheye"
        />
        <a
          className="border-2 border-black px-5 py-1 text-2xl uppercase tracking-widest mx-auto lg:hidden"
          href=""
        >
          See All
        </a>
      </div>
    </div>
  );
}

export default MainGallery;
