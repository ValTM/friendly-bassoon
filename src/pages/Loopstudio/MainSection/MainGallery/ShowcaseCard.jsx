import React from 'react';
import PropTypes from 'prop-types';

function ShowcaseCard(props) {
  return (
    <div className={props.cardClassName}>
      <div className={props.textClassName}>
        {props.text1}
        <br />
        {props.text2}
      </div>
    </div>
  );
}

ShowcaseCard.propTypes = {
  cardClassName: PropTypes.string,
  textClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

export default ShowcaseCard;
