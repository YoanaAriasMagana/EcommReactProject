import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from"./components/Products";
import Contact from"./components/Contact";

import { Route, Routes } from "react-router-dom";
import './App.css';


export default function App() {
  return (
    <>
    <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} /> 
    </Routes>
    <Footer />
    </>
  );
}
