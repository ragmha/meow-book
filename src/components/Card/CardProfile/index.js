import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import Avatar from '../../Avatar';

const CardProfile = ({ img, header }) => (
  <div className="cardProfile">
    <Avatar className="avatar" src={img} />
    <div className="cardProfile-header">{header}</div>
  </div>
);

CardProfile.defaultProps = {
  img:
    'https://i.pinimg.com/736x/1d/83/e0/1d83e0f607b7b1de607fff558a573b6c--cat-smile-smile-smile.jpg',
  header: 'Mr. Meow',
};

CardProfile.propTypes = {
  img: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};
export default CardProfile;
