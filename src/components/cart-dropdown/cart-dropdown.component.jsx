import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.component.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length > 0 ? cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        )) : <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})


export default connect(mapStateToProps)(CartDropdown);