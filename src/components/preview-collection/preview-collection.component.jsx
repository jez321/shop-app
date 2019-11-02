import React from 'react';
import './preview-collection.component.scss';
import PropTypes from 'prop-types';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({ title, items }) => (
  <div className="preview-collection">
    <h1 className="title">
      {title}
    </h1>
    <div className="preview">
      {
        items.slice(0, 4).map(({
          id, name, imageUrl, price,
        }) => (
            <CollectionItem key={id} name={name} imageUrl={imageUrl} price={price} />
          ))
      }
    </div>
  </div>
);

PreviewCollection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default PreviewCollection;
