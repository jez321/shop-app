import React from 'react';
import './collection-item.component.scss';
import PropTypes from 'prop-types';

const CollectionItem = ({ name, price, imageUrl }) => (
  <div data-test="collection-item" className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span data-test="collection-item-name" className="name">{name}</span>
      <span data-test="collection-item-price" className="price">{price}</span>
    </div>
  </div>
);

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CollectionItem;
