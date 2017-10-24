import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import stockImg from './cat.png';

const Gallery = ({ images }) => (
  <section>
    {images.map((image, i) => (
      <div className="media" key={i}>
        <img src={image} alt="" />
      </div>
    ))}
  </section>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

Gallery.defaultProps = {
  images: [1, 2, 3, 4, 5, 6].map(num => stockImg),
};

export default Gallery;
