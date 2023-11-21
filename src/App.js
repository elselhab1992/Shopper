import { NavBar, Footer } from "./components/index";
import { Shop, Product, Category, Cart } from "./Pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import womenBanner from "./Assets/banner_women.png";
import menBanner from "./Assets/banner_mens.png";
import kidsBanner from "./Assets/banner_kids.png";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/women"
          element={<Category categories="women" banner={womenBanner} />}
        />
        <Route
          path="/men"
          element={<Category categories="men" banner={menBanner} />}
        />
        <Route
          path="/kids"
          element={<Category categories="kid" banner={kidsBanner} />}
        />
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
