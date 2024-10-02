import { BrowserRouter, Routes, Route } from "react-router-dom";

// import images
import logo from "./assets/dalida.jpg";

import "./App.css";
// import components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import RecoverPassword from "./components/RecoverPassword";
import Home from "./components/Home";
import Shop from "./components/Shop";

//contexts
import { ProductProvider } from "./contexts/ProductsContext";
import { CategoriesProvider } from "./contexts/CategoryContext";
import Sidebar from "./components/Sidebar";
import ProductDetails from "./components/ProductDetails";


function App() {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <NavBar logo={logo} />
          <CategoriesProvider>
          <Sidebar/>
          </CategoriesProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/recover-password" element={<RecoverPassword />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/details/:id" element={<ProductDetails/>}/>
            </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </>
  );
}

export default App;
