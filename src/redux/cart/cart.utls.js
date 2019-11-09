export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(item => 
      item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item 
    );
  } else {
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
  }
}
export const removeItemFromCart = (cartItems, cartItemIdToRemove) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemIdToRemove);
  if (existingCartItem.quantity === 1) {
    return clearCartItem(cartItems, cartItemIdToRemove)
  } else {
    return cartItems.map(item => 
      item.id === cartItemIdToRemove ? { ...item, quantity: item.quantity - 1 } : item 
    );
  }
}

export const clearCartItem = (cartItems, cartItemIdToRemove) => (
  cartItems.filter(cartItem => {
    return cartItem.id !== cartItemIdToRemove
  })
)