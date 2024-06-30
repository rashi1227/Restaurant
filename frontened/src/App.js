
import Menu from "./components/menus/menus";
import Home from "./components/home/Home";
import { Route, Routes } from 'react-router-dom'
import Signup from "./components/Signup";
import Cart from "./components/cart/Cart";

import { CartProvider } from "react-use-cart";

function App() {
  return (
  <div>
    <CartProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </CartProvider>

  </div>
  );
}

export default App;
