import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Home from "./pages/home";
import Menu from "./components/menu";
import Cart from "./pages/cart";
import { useState } from "react";
import { Product } from "./contexts/cart";

function App() {
  const [items, setItems] = useState<Product[]>([]);

  console.log('Sardor')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home items={items} setItems={setItems}/>} />
        <Route path="/menu" element={<Menu items={items} setItems={setItems}/>} />
        <Route path="/cart" element={<Cart items={items} setItems={setItems}/>} />
        <Route path="/*" element={<div className="h-screen flex justify-center items-center text-center text-2xl font-bold">Tuppoymisaaaaan</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
