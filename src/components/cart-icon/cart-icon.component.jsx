import React from 'react';
import './cart-icon.component.scss'
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

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

const mapStateToProps = createStructuredSelector({
  cartItemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);