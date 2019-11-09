import { CartActionTypes } from './cart.action-types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
export const addCartItem = item => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item
});
export const removeCartItem = itemId => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: itemId
});
export const clearCartItem = itemId => ({
  type: CartActionTypes.CLEAR_CART_ITEM,
  payload: itemId
});