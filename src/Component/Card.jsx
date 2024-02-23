// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, removeFromCart, incementQuntity, decrementQuntity,clearAll} from './Storage/CartSlice';
import './Card.css';
import Swal from 'sweetalert2';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  const handleIncrementQuantity = (item) => {
    // dispatch(incrementQuantity({ id: item.id }));
    dispatch(incementQuntity({ id: item.id }))
  };

  const handleDecrementQuantity = (item) => {
    // dispatch(decrementQuantity({ id: item.id }));
    dispatch(decrementQuntity({ id: item.id }))
  };
  const remove=()=>{
   
   
    Swal.fire({
      title: "Oder is Confiremed",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
    dispatch(clearAll())
   
  }


  // Calculate total price of all products in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h2>Card</h2>
      <table className="table  ">
        <thead>
          <tr scope="col">
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Ince/Decrement</th>
            <th>Final Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} scope="row"s>
              {/* <td><img src={item.img} alt={item.name} style={{ width: '50px' }} /></td> */}
              <td>{item.name}</td>
              <td> Rs {item.price}</td>
              <td className='s'>
                {item.quantity}

              </td>
              <td>
                <button className='btn btn-danger ' onClick={() => handleDecrementQuantity(item)}>-</button>&nbsp;
                <button  className="btn btn-success   " onClick={() => handleIncrementQuantity(item)}>+</button>
              </td>
              <td>
                {`Rs ${(item.price * item.quantity).toFixed(2)}`}
              </td>
              <td>
                <button className='btn btn-danger remove ' onClick={() => handleRemoveFromCart(item.id)}> X </button>
              </td>
            </tr>
          ))}
          <tr scope="row">
            <td colSpan="4"><strong>Total</strong></td>
            <td><strong>{`Rs ${totalPrice.toFixed(2)} `}</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>
     {cartItems.length>0 &&<button className="btn btn-primary" onClick={remove}>Checkout</button>} 
    </div>
  );
};

export default Cart;