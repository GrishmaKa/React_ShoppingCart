
import Header from "./components/Header";
import { DUMMY_PRODUCTS } from "./dummy-products";
import Shop from "./components/Shop";
import Products from "./components/Products";
import CartContextProvider from "./store/shopping-cart-context";


function App() {

  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Products {...product} />
          </li>))}
      </Shop>
   </CartContextProvider>
  );
}

export default App;
