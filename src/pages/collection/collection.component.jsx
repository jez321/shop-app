import React from 'react';
import './collection.component.scss';
import { connect } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h2 className="title">{collection.title}</h2>
    <div className="collection-items">
      {collection.items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collection)(state)
});

export default connect(mapStateToProps)(CollectionPage);
