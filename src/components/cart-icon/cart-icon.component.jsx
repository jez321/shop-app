import React from 'react';
import './cart-icon.component.scss'
import { connect } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, cartItemCount }) => {
  console.log('render cart icon')
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

const mapStateToProps = state => ({
  cartItemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);