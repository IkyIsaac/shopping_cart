// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Header } from "./Pages/Header";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
