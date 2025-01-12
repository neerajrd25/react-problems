import { useContext } from "react";
import products from "../../products";
import { CartContext } from "../../context/shopping-cart.context";

export const ProductList = ({}) => {

  return (<>
    <h3> Product Listing</h3>
    {products.map((p) => {
      return <Product key={p.id} item={p} />
    })}
  </>)
};

const Product = ({ item } : any) => {

  const { addItem } = useContext(CartContext);
  const handleAddItem = () => addItem(item)
  const { price, name } = item;
  return (
    <>
      <div style={{ padding: '10px', height: '50 px', width: '150px', backgroundColor: 'wheat' }} >
        <h4>
          {name}
        </h4>
        <p> Price : {price}</p>
        <button onClick={handleAddItem}>Add Item </button>
      </div>
    </>
  )
}