import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalValue } =
    useContext(CartContext);

  const handleCheckout = () => {
    alert("Xác nhận đơn hàng thành công!");
  };

  const handlePayment = () => {
    alert("Thanh toán thành công!");
  };

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div>
            <p>{`Tổng số món: ${cartItems.length}`}</p>
            <p>{`Tổng giá trị: $${totalValue}`}</p>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={handleCheckout}>Xác nhận đơn hàng</button>
            <button onClick={handlePayment}>Thanh toán</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
