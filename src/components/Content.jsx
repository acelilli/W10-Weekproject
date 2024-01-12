import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import SearchCity from "./SearchCity";
import WelcomeCard from "./WelcomeCard";

const Content = () => {
  // setto i valori iniziali:
  //Valori iniziali per SEARCHCITY
  // Valore iniziale della ricerca = stringa vuota
  // Valore iniziale della città ricercata = Array vuoto
  // è stata effettuata una ricerca? Si/No (parto da no)
  const [searchQuery, setSearchQuery] = useState("");
  const [cityData, setCityData] = useState([]);
  const [getSearch, setGetSerch] = useState(false);

  // const [imageUrl, setImageUrl] = useState({});
  // const [loadedPhoto, setLoadedPhoto] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (searchQuery.trim() !== "") {
          // Se searchQuery non sia una stringa vuota allora:
          let resp = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=d2f0cb3825395c7de55d96f5e48979ac`
          );
          if (resp.ok) {
            let data = await resp.json();
            console.log("SEARCHED CITY'S WEATHER ARRAY", data);
            setCityData(data);
            setGetSerch(true);
          } else {
            console.log("ERROR FETCHING");
          }
        }
      } catch (error) {
        console.log("CATCHED", error);
      }
    };
    fetchWeatherData();
  }, [searchQuery]);

  return (
    <Container fluid className="px-3">
      {/* Row che contiene i tool*/}
      <Row className="justify-content-center">
        {/* Col di WelcomeCard */}
        <Col md={4}>
          <WelcomeCard />
        </Col>
        {/* COL DI SearchCity */}
        <Col md={7} className="me-4 ms-2">
          <SearchCity searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          {/* <City /> che è un component di Search City e fa apparire la grafica carina del luogo cercato. Appare una card o un elemento diviso in due o tre parti. Da un lato l'immagine della città, dagli altri due le info che mi da la API*/}
        </Col>
      </Row>
      {/* <Explore/> 
        Dove inserisco un component carosello Dove però devo rifare la fetch dei dati MA ci metto le immagini di capitali (Washington, Ottawa, Roma, Londra, Parigi, Barcellona, Pechino, Tokyo, Seoul, Sydney)*/}
    </Container>
  );
};

export default Content;
