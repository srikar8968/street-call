import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import CartPanel from "./components/CartPanel";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <CartPanel /> */}
      <Routes>
        <Route path="/" element={<Home />}>
          {/*<Route path="/play" element={
              <motion.div layoutId={25} className="example-container">
                <Example />
              </motion.div>
            } exact />*/}
        </Route>
        <Route path="/product/:id" element={<Product />} exact />
      </Routes>
    </div>
  );
}

export default App;
