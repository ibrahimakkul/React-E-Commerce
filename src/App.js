import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home"
import Cart from "../src/Pages/Cart"
import ProductDetails from "./Pages/ProductDetails";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import MyAccount from "./Pages/MyAccount";




function App() {
  const [theme] = useThemeHook();
  
  return (
    <>
      <main className={theme ? "bg-black" : "bg-light-2"} style={{height:"100vh",overflowY:"auto"}}>
      <Header/>
      
      <Routes>

      <Route exact path="/Register" element={<Register/>}/>
        <Route path="/" element={<SignIn/>}/>
        <Route  path="/home" element={<Home/>}/>
        <Route path="/product-details/:productId" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/my-account" element={<MyAccount/>}/>
        
        
      </Routes>
      </main>
    </>
  );
}

export default App;
