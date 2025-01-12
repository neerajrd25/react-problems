import { useContext, useEffect } from "react"
import { CartContext } from "../../context/shopping-cart.context"

export const Cart = () => {

  const { total, cart, clearCart, removeItem } = useContext(CartContext)
  return (<>
    <h3>Cart</h3>
    {Object.keys(cart).length === 0 && <p style={{ color: 'rebeccapurple' }}>No Items in the cart</p>}
    <ul>
      {Object.values(cart).map(
        (
          {
            id, name, quantity, price
          },
          index
        ) => {

          return (<li key={index}>{index + 1} {name} Quanity : {quantity} Price : {price} <button onClick={() => removeItem(id)}>x</button></li>)
        }
      )}
    </ul>
    {Object.keys(cart).length > 0 && <button onClick={() => clearCart()}>Clear Cart</button>}
    <h3> Total : {total.toFixed(2)}</h3>
  </>);
}