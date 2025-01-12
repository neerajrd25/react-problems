// import CartContext from "../context/shopping-cart.context"
import { useReducer } from "react"
import { CartContext } from "../context/shopping-cart.context"
import { Cart } from "./Cart/Cart"
import { ProductList } from "./Cart/ProductList"

const calculateTotal = (cart) => {
  const items = Object.values(cart)

  // console.log(items);
  return items.reduce((acc: number, cv) => acc + (cv.quantity * cv.price), 0);

}
const reducer = (state, action) => {

  const { cart } = state;
  switch (action.type) {
    case 'ADD_ITEM':
      const { id, name, price } = action.value;
      const cartItem = cart[id];
      let item;
      if (cartItem) {
        item = { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        item = { id, name, quantity: 1, price }
      }
      const updatedCart = { ...cart, [id]: item };
      return { ...state, cart: updatedCart, total: calculateTotal(updatedCart) }
    // return {...state, id: action.type}
    case 'CLEAR_CART': return { cart: {}, total: 0 }
    case 'REMOVE_ITEM':
      const itemId = action.value;
      const newCart = { ...cart };
      delete newCart[itemId];
      return { cart: newCart, total: calculateTotal(newCart) }

    default: throw new Error('Action Not Supported')
  }
}
export const ShoppingCart = function () {
  const [state, dispatch] = useReducer(reducer, {
    cart: {},
    total: 0
  }); // Initialize reducer
  const addItem = (item) => dispatch({ type: 'ADD_ITEM', value: item }); // add action
  const clearCart = () => dispatch({ type: 'CLEAR_CART' }); // empty action
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', value: id }); // empty action
  // const decrement = () => dispatch({ type: 'DECREMENT' }); // Decrement action
  return (<>
    <h1>Shopping Cart</h1>
    <CartContext.Provider value={{ addItem, clearCart, removeItem, cart: state.cart, total: state.total }}>
      <div style={{ display: 'flex' }}>
        <ProductList />
        <div style={{ display: 'flex' }}></div>
        <Cart />
      </div>
    </CartContext.Provider>
  </>)
}