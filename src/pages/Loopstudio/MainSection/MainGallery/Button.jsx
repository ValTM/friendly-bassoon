import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return <h1 className={props.class}>{props.text}</h1>;
}

Button.propTypes = {
  text: PropTypes.string,
  class: PropTypes.string,
};

export default Button;
