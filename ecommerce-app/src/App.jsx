import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Cart from "./components/Cart.jsx";
import OrderSummary from "./components/OrderSummary.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx"; 

const App = () => (
  <div className="app">
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderSummary />} />
        <Route path="/feedback" element={<FeedbackForm />} /> 
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
