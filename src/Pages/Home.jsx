import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="Home-container">
        <h1>Home</h1>
        <p>welcome to the Store</p>

        <button> {<Link to="/Products">Shop Now</Link>}</button>
      </div>
    </>
  );
}
