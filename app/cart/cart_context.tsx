"use client";

import { createContext, useContext, useRef } from "react";

type CartContextType = {
  cartRef: React.RefObject<HTMLDivElement | null>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const cartRef = useRef<HTMLDivElement>(null);

  return (
    <CartContext.Provider value={{ cartRef }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
