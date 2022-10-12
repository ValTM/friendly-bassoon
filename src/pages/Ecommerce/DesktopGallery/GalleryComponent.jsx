import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import produc1 from '../../../assets/ecommerce-img/image-product-1.jpg';
import produc2 from '../../../assets/ecommerce-img/image-product-2.jpg';
import produc3 from '../../../assets/ecommerce-img/image-product-3.jpg';
import produc4 from '../../../assets/ecommerce-img/image-product-4.jpg';
import previous from '../../../assets/ecommerce-img/icon-previous.svg';
import next from '../../../assets/ecommerce-img/icon-next.svg';

function GalleryComponent(props) {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(props.index || 0);
  const images = [produc1, produc2, produc3, produc4];
  const { isDesktopGallery, isMobileGallery } = props;

  const toggleModal = () => {
    setModal(!modal);
  };

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

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  return (
    <div>
      {isDesktopGallery && (
        <>
          <img
            className="image w-[520px] rounded-xl"
            src={produc1}
            alt=""
            onClick={toggleModal}
          />
          <div className=" flex justify-between my-2   ">
            {images.map((img, index) => (
              <img
                key={index}
                className=" image w-[120px] h-[120px]  rounded-xl hover:opacity-70 hover:border-2 border-[#FF7E1B]"
                src={img}
                alt=""
                onClick={() => {
                  setIndex(index);
                  toggleModal();
                }}
              />
            ))}
          </div>
        </>
      )}
      {isMobileGallery && (
        <div className="sm:w-[500px] mx-auto xl:hidden">
          <img className="relative" src={images[index]} alt="" />
          <div className=" flex w-screen justify-between  relative -mt-[200px] sm:w-[500px] sm:px-0 sm:-mt-[270px] xl:hidden">
            <img
              className="bg-white rounded-full px-4 py-3 ml-2 "
              src={previous}
              onClick={slidePrev}
            />
            <img
              className=" bg-white rounded-full px-4 py-3 mr-2 "
              src={next}
              onClick={slideNext}
            />
          </div>
        </div>
      )}
      {modal && (
        <>
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[30]">
            <div
              className=" -top-[40px] -right-[20px] w-[25px] h-[25px] absolute "
              onClick={toggleModal}
            >
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#fff"
                  fillRule="evenodd"
                  className="hover:fill-[#FF7E1B]"
                />
              </svg>
            </div>
            <img className="w-[550px] rounded-xl" src={images[index]} alt="" />
            <div className="flex w-screen justify-between  absolute -mt-[200px] sm:w-[600px] -right-[25px] sm:px-0 sm:-mt-[270px]">
              <img
                className="bg-white rounded-full px-4 py-3 ml-2 "
                src={previous}
                onClick={slidePrev}
              />
              <img
                className=" bg-white rounded-full px-4 py-3 mr-2 "
                src={next}
                onClick={slideNext}
              />
            </div>
            <div className=" flex justify-around my-3  ">
              {images.map((img, index) => (
                <img
                  key={index}
                  className="w-[100px] h-[110px]  rounded-xl  hover:border-2 border-[#FF7E1B]"
                  src={img}
                  alt=""
                  onClick={() => setIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="overlay  absolute top-0 left-0 w-[100%] h-screen bg-[#00000099] z-[20] ">
            {' '}
          </div>
        </>
      )}
    </div>
  );
}
GalleryComponent.propTypes = {
  index: PropTypes.string,
  isDesktopGallery: PropTypes.bool,
  isMobileGallery: PropTypes.bool,
};

export default GalleryComponent;
