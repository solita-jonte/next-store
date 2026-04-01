import products from '../data/products.json'
import { NavBar } from './cart/cart_bar'
import { ProductCard } from './product/product_card';
import { CartProvider } from "./cart/cart_context";

export default function Home() {
  return (
    <CartProvider>
      <div className="p-8">
        <NavBar />
        <h1 className="text-3xl font-bold mb-6">
          <img
            className="logo"
            alt="logo"
            src="/icon.svg"
          />
          Solita Merch
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </CartProvider>
  );
}
