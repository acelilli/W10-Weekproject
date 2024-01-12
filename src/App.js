import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import MyNav from "./components/MyNav";
import SearchCity from "./components/SearchCity";
import MyFooter from "./components/MyFooter";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Content />
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
