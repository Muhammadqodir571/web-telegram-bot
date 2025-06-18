import {totalPrice } from "../../unitls/total-price"
import Button from "../button/button"
import './cart.css'
function Cart(props) {
  const { cartItems,checkOut } = props;
  return (
    <div className="cart-contianer">
        <p> Umumiy narx:  {totalPrice(cartItems).toLocaleString('en-US',
          {style: 'currency',
          currency: 'USD'})}
        </p>
        <Button  title = {`${cartItems.length ===0 ?
         'Buyurtma berish ':"To'lov"}`} type = {"checkout"} 
        disabled = {cartItems.length ===0 ? true : false}
        onClick ={checkOut}
        />
        
    </div>
  )
}

export default Cart