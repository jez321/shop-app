import React from 'react';
import './cart-icon.component.scss'
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => {
  return (
  <div onClick={ toggleCartHidden } className="cart-icon">
    <ShoppingBag className="shopping-bag"></ShoppingBag>
    <span className="item-count">0</span>
  </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);