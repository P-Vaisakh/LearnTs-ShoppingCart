import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import ShoppingCartProvider from "./Context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/store" element={<Store></Store>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
