import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Home from "./pages/home";
import Cart from "./pages/cart";
import NotFound from "./pages/not-found";
import Login from "./pages/login";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
