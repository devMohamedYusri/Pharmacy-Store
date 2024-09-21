import React from 'react'
// import images
import reactLogo from './assets/react.svg'
import testLogo from "./assets/after-sun-care-404974.jpg";
import logo from "./assets/bloom.png";
import bloomHome from "./assets/Bloom-22.jpg";
import category1 from "./assets/face.png";

import "./App.css";
// import components
import Button from "./components/Button";
import TitleLine from "./components/TitleLine";
import IconCategory from "./components/IconCategory";
import Ad from "./components/Ad";
import Brand from "./components/Brand";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Tail from './components/Tail';

function App() {
  return (
    <>
      <NavBar />
      <Footer />
      <Tail />
    </>
  );
}

export default App;
