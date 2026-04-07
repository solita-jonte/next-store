import Link from 'next/link';
import products from '../data/products.json';
import { NavBar } from './cart/cart_bar';
import { CartProvider } from "./cart/cart_context";
import { ProductCard } from './product/product_card';
import Footer from './components/footer';

export default function Home() {
  return (
    <CartProvider>
      <div className="p-8">
        <NavBar />
        <h1 className="header text-3xl font-bold mb-6">
          <Link href="/dontclick">
            <img
              className="logo"
              alt="logo"
              src="/icon.svg"
            />
          </Link>
          Solita&nbsp;
          <span>M</span>
          <span>e</span>
          <span>r</span>
          <span>c</span>
          <span>h</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </CartProvider>
  );
}
