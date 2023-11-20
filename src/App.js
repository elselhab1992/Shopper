import { NavBar, Footer } from "./components/index";
import { Shop, Product, Category, Cart } from "./Pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/women" element={<Category category="women" />} />
        <Route path="/men" element={<Category category="men" />} />
        <Route path="/kids" element={<Category category="kids" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
