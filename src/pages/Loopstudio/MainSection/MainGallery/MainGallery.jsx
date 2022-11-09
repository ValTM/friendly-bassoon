import React from 'react';
import './MainGallery.css';
import ShowcaseCard from './ShowcaseCard';
import Button from './Button';

function MainGallery() {
  const cardData = [
    { text1: 'deep', text2: 'earth', className: 'loop-earth' },
    { text1: 'night', text2: 'arcade', className: 'loop-night' },
    { text1: 'soccer', text2: 'team vr', className: 'loop-soccer' },
    { text1: 'the', text2: 'grid', className: 'loop-thegrid' },
    { text1: 'from up', text2: 'above vr', className: 'loop-from-above' },
    { text1: 'pocket', text2: 'borealis', className: 'loop-pocket' },
    { text1: 'the', text2: 'curiosity', className: 'loop-curiosity' },
    { text1: 'make it', text2: 'fisheye', className: 'loop-eye' },
  ];

  return (
    <div className=" mt-20">
      <h1 className="text-center gallery--text text-2xl uppercase lg:hidden">
        our creations
      </h1>
      <div className=" gallery--nav hidden mx-20 lg:flex lg:justify-between xl:w-[1170px] xl:mx-auto">
        <h1 className="text-center gallery--text text-2xl uppercase ">
          our creations
        </h1>
        <Button
          class={`border border-loopDarkGray border-black text-black px-8 py-1 text-2xl uppercase tracking-widest hover:bg-black hover:text-white hover:border duration-300 cursor-pointer`}
          text="see all"
        />
      </div>
      <div className="items justify-center grid mt-10 gap-x-14 gap-y-8 lg:flex flex-wrap ">
        {cardData.map((data, i) => {
          return (
            <React.Fragment key={`showcase-card-${i}`}>
              <ShowcaseCard
                cardClassName={`${data.className} cursor-pointer item`}
                textClassName="items-text absolute bottom-2 left-5 text-white uppercase text-2xl lg:text-3xl lg:bottom-4"
                text1={data.text1}
                text2={data.text2}
              />
            </React.Fragment>
          );
        })}
        <Button
          class={`border border-loopDarkGray border-black text-black px-8 py-1 text-2xl uppercase tracking-widest hover:bg-black hover:text-white hover:border duration-300 mx-auto lg:hidden cursor-pointer`}
          text="see all"
        />
      </div>
    </div>
  );
}

export default MainGallery;
