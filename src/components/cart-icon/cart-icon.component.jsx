import React from 'react';
import './cart-icon.component.scss'
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden, cartItemCount }) => {
  return (
  <div onClick={ toggleCartHidden } className="cart-icon">
    <ShoppingBag className="shopping-bag"></ShoppingBag>
    <span className="item-count">{cartItemCount}</span>
  </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItemCount: cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);