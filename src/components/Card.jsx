import React from 'react';
import PropTypes from 'prop-types';
import '../pages/LandingPage/LandingPage.css';

function Card(props) {
  return (
    <div className="cardBox m-3">
      <h1>{props.title}</h1>
      <img src={props.image} alt="" />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.element,
};

export default Card;
