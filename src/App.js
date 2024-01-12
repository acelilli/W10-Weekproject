import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import MyNav from "./components/MyNav";
import SearchCity from "./components/SearchCity";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        {/* In una row/col in cui metto un altro elemento che mi mostra la data e tutte le altre info! Una card senza immagini che mi da il benvenuto nella page! Allineato al logo */}
        <SearchCity />
        {/* <City /> che è un component di Search City e fa apparire la grafica carina del luogo cercato. Appare una card o un elemento diviso in due o tre parti. Da un lato l'immagine della città, dagli altri due le info che mi da la API*/}
        {/* <Explore/> 
        Dove inserisco un component carosello Dove però devo rifare la fetch dei dati MA ci metto le immagini di capitali (Washington, Ottawa, Roma, Londra, Parigi, Barcellona, Pechino, Tokyo, Seoul, Sydney)*/}
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
