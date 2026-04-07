'use client';
import { useRef } from "react";
import { useCart } from "../cart/cart_context";
import { useFlyToCart } from "../cart/fly_to_cart";
import { Product } from './product';

type ProductCardProps = {
    product: Product,
};

export function ProductCard({product}: ProductCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const { cartRef } = useCart();
  const { flyToCart } = useFlyToCart(cartRef);

  const handleAdd = () => {
    if (imgRef.current) {
      flyToCart(imgRef.current);
    }
    // addToCart(product);
  };

  return (
    <div className="product-card border p-4 rounded-2xl shadow hover:shadow-xl transition">
      <div className="flex justify-center">
        <img
            ref={imgRef}
            src={product.image}
            alt={product.name}
            className="h-36 object-contain mb-4"
        />
      </div>
      <h2 className="font-semibold text-xl">{product.name}</h2>
      <p className="text-gray-500 mb-2">${product.price}</p>
      <button className="add-button w-full bg-blue-500 text-white py-2 border rounded-xl hover:bg-green-500 transition" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
 );
}
