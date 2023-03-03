import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ItemDetails from "./Components/ItemDetails";
import Checkout from "./Components/Checkout";
import Confirmation from "./Components/Confirmation";
import Navbar from "./Components/Navbar";
import CartMenu from "./Components/CartMenu";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Catalog from "./Components/Catalog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CartMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/item/:itemId" element={<ItemDetails />} />
        <Route path="/checkout/" element={<Checkout />} />
        <Route path="checkout/success" element={<Confirmation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
