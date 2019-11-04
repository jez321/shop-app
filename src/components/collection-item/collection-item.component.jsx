import React from 'react';
import './collection-item.component.scss';
import PropTypes from 'prop-types';
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
  <div data-test="collection-item" className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span data-test="collection-item-name" className="name">{name}</span>
      <span data-test="collection-item-price" className="price">{price}</span>
    </div>
    <CustomButton onClick={() => addCartItem(item)} inverted>ADD TO CART</CustomButton>
  </div>
  )
};

CollectionItem.propTypes = {
  item: PropTypes.shape({ 
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
