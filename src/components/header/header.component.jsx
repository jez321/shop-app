import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.component.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { setCartHidden } from '../../redux/cart/cart.actions';

const Header = ({ currentUser, cartHidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <a href="#" className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </a>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    { cartHidden ? null : <CartDropdown/> }
  </div>
);

const mapStateToProps = ({ user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  cartHidden: hidden
});

export default connect(mapStateToProps)(Header);
