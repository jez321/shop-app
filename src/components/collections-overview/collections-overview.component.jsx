import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selector';
import PreviewCollection from '../preview-collection/preview-collection.component';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {Object.keys(collections).map(key => {
      const { id, title, items } = collections[key];
      return (
        <PreviewCollection key={id} title={title} items={items} />
      )
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
