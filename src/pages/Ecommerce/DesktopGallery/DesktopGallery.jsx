import React from 'react';

import './DesktopGallery.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import GalleryComponent from './GalleryComponent';

function DesktopGallery() {
  const [modal] = useState(false);

  return (
    <div className="hidden xl:block">
      {' '}
      <div>
        <GalleryComponent isDesktopGallery />
      </div>
      {modal && <GalleryComponent modal />}
    </div>
  );
}

DesktopGallery.propTypes = {
  index: PropTypes.number,
};

export default DesktopGallery;
