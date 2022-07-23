import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="pt-4 bg-gray-200 pb-4 flex flex-col  items-center sm:flex-row sm:pt-0 sm:pb-0 sm:h-20 ">
      <Link className=" " to="/">
        <p className=" text-center border border-black px-2 py-1 rounded sm:ml-10 hover:bg-black hover:text-gray-200 duration-300">
          &#129056; Go back
        </p>
      </Link>
      <p className=" text-2xl mt-2 font-bold text-center tracking-widest sm:ml-10 sm:mt-0 ">
        {props.title}
      </p>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
