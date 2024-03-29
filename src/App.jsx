import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
// import Faq from "./components/Faq";
// import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="homepage" element={<HomePage />} />
          <Route path="products" element={<Products />}>
            <Route path=":productId" element={<SingleProduct />}/>
          </Route>
          {/* <Route path="faq" element={<Faq />} />
          <Route path="about" element={<About />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
