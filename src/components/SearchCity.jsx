import Form from "react-bootstrap/Form";
import { Row, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { useState } from "react";

function SearchCity() {
  // setto i valori iniziali:
  const [searchQuery, setSearchQuery] = useState("");
  // Valore iniziale della ricerca
  const [weatherData, setWeatherData] = useState([]);
  //Array vuoto dove vanno i dati meteo della ricerca
  const [getSearch, setGetSerch] = useState(false);
  // è stata effettuata una ricerca? Si/No (parto da no)

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
            setWeatherData(data);
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
    <Container className="d-flex flex-column flex-grow-1">
      <Row className="justify-content-center">
        <Col xs={11} sm={11} md={8} lg={6} className="mt-4">
          <Form.Group>
            <Form.Control
              className=" p-1 fs-5  "
              type="search"
              placeholder="Search city now..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8}>
          <p>City info</p>
          {/* {searchData.length > 0 && <CardWeather latandlong={searchData[0]} />} */}
        </Col>
      </Row>
    </Container>
  );
}
export default SearchCity;
