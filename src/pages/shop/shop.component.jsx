import React from 'react';
import { selectShopCollections } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, title, items }) => (
      <PreviewCollection key={id} title={title} items={items} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
