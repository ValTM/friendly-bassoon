import React from 'react';
import PropTypes from 'prop-types';
import '../pages/LandingPage/LandingPage.css';

function Card(props) {
  return (
    <div className="cardBox m-3 bg-gray-100">
      <h1 className="text-2xl mt-2 font-bold tracking-widest">{props.title}</h1>
      <img className="card--img" src={props.image} alt="" />
      <a
        className="card--link border-2 border-black px-4 py-2 duration-300 hover:bg-black hover:text-gray-100 hover:border-2"
        href={props.url}
      >
        view project
      </a>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default Card;
