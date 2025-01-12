import { createContext } from "react";
import { data } from "react-router";

const defaultValue = {
  cart: {
    data: []
  },
  addItem: () => {

  },
  removeItem: () => {

  },
  clear: () => {

  }

}
export const CartContext = createContext(null)

// export const CartProvider =   ({children}) => {


// }