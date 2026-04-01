'use client';
import { useCart } from './cart_context'

export function NavBar() {
  const { cartRef } = useCart();

  return (
    <div className="cartbar fixed flex justify-end">
      <div ref={cartRef} id="cart-icon" className="cartwagon">
        🛒
      </div>
    </div>
  );
}
