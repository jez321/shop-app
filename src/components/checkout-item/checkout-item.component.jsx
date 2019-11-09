import React from 'react';
import { connect } from 'react-redux';
import { clearCartItem, addCartItem, removeCartItem } from '../../redux/cart/cart.actions';
import './checkout-item.component.scss';

const CheckoutItem = ({ cartItem, clearCartItem, addCartItem, removeCartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="Checkout item" />
    </div>
    <span className="name">{name}</span>
    <div className="quantity">
      <div onClick={() => removeCartItem(id)} className="arrow">&#10094;</div>
      <span className="value">{quantity}</span>
      <div onClick={() => addCartItem(cartItem)} className="arrow">&#10095;</div>
    </div>
    <span className="price">{price}</span>
    <a onClick={() => clearCartItem(id)} className="remove-button">
      &#10005;
    </a>
  </div>
)};
const mapDispatchToProps = dispatch => ({
  clearCartItem: id => dispatch(clearCartItem(id)),
  addCartItem: item => dispatch(addCartItem(item)),
  removeCartItem: id => dispatch(removeCartItem(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);