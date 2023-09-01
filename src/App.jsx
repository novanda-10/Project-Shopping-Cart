import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* 
      <Home />
      <Products />
      <About /> */}

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
