
import "../Cart/Cart.css";
import { FiPlus } from "react-icons/fi";
import CartPortal from "../CartModal/Cartportals";
import { useProductContext } from "../AddCart/CartProviders";
import { CiCircleMinus } from "react-icons/ci";
const Cart = ({ onClose,ProductsList }) => {
  const { handleRemove } = useProductContext();



  return (
    <>
      {ProductsList.length ? (
        <CartPortal onClose={onClose}>
          <div className="all_cart_items">
            <table className="cart_table">
              <thead>
                <tr className="cart_table_header">
                  <th>IMAGE</th>
                  <th>TITLE</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {ProductsList.map((item, index) => (
                  <tr key={index} className="cart_table_row">
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cart_item_image"
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}
                    <ul className="things">
                      <li className="plus">
                        <td className="plus-symbol" ><FiPlus /></td>
                        <td><CiCircleMinus /></td>
                      </li>
                    </ul>
                    </td>
                    <td>
                      <button onClick={() => handleRemove(index)} className="remove_button">
                        REMOVE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CartPortal>
      ) : (
        alert("No cart items")
      )} 
    </>
  );
};

export default Cart;
