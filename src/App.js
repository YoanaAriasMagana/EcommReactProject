// import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from"./components/Products";
import Contact from"./components/Contact";


import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Products" element={<Products />} />
          <Route exact path="Contact" element={<Contact />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="Products">Shop</Link></li>
            <li><Link to ="Contact">Contact</Link></li>
          </ul>
        </div>
      </Router>
     <Footer />

    </div>

  );
}

export default App;
