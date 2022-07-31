import React from 'react';
import { useState } from 'react';
import produc1 from '../../../assets/ecommerce-img/image-product-1.jpg';
import produc2 from '../../../assets/ecommerce-img/image-product-2.jpg';
import produc3 from '../../../assets/ecommerce-img/image-product-3.jpg';
import produc4 from '../../../assets/ecommerce-img/image-product-4.jpg';
import previous from '../../../assets/ecommerce-img/icon-previous.svg';
import next from '../../../assets/ecommerce-img/icon-next.svg';

function MobileGallery() {
  const [index, setIndex] = useState(0);

  const images = [produc1, produc2, produc3, produc4];
  const slideNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const slidePrev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div>
      <img className="" src={images[index]} alt="" />
      <div className="absolute top-[40%] left-0 flex w-screen justify-between">
        <img
          className="bg-white rounded-full px-4 py-3 ml-2 "
          src={previous}
          onClick={slidePrev}
        />
        <img
          id="arrow"
          className="bg-white rounded-full px-4 py-3 mr-2 "
          src={next}
          onClick={slideNext}
        />
      </div>
    </div>
  );
}

export default MobileGallery;
