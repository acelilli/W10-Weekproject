// import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

function CityCard({ apik, cityData }) {
  const [weatherData, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        // verifico che esistano sia cityData che .lat che .lon
        if (cityData && cityData.lat && cityData.lon) {
          const resp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&appid=${apik}`
          );
          if (resp.ok) {
            const data = await resp.json();
            console.log("Questi sono i cityData", cityData);
            setWeather(data);
            console.log("Questi sono i weatherData", weatherData);
          } else {
            console.log("Error fetching weather");
          }
        } else {
          console.log("Error fetching: missing data (latitude and/or longitude");
        }
      } catch (error) {
        console.error(error);
        console.log("Error while fetching weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [apik, cityData]);

  return (
    <>
      <Row className="my-3 mx-4">
        <Col sm={12}>
          <Card className="border-0">
            {loading ? (
              <div className="text-center m-3 border-0 rounded-0">
                <Spinner animation="border" variant="info" role="status" className="fs-4 text-center" />
              </div>
            ) : weatherData ? (
              <div>
                <Card.Body className="bg-info-subtle text-start border-0">
                  <Card.Title className="fs-2 ps-2 p-1 city">
                    {cityData.name} - {cityData.state} {cityData.country}
                  </Card.Title>
                  <Card.Text>
                    <Row className="flex-column-reverse flex-md-row ">
                      <Col>
                        <Card.Text className="fs-5 ms-3 my-1">
                          {weatherData.weather[0].main} : {weatherData.weather[0].description}
                        </Card.Text>
                        <Card.Text className="fs-5 ms-3 my-1">
                          Wind : deg: {weatherData.wind.deg}, speed: {weatherData.wind.speed}
                        </Card.Text>
                      </Col>
                      <Col sm={"auto"}>
                        {/* CARD INTERNA CON LE TEMP.*/}
                        <Card style={{ width: "18rem" }} className="fs-5 ms-5 my-1">
                          <Card.Header>Temperature {weatherData.main.temp}°C</Card.Header>
                          <ListGroup variant="flush">
                            <ListGroup.Item className="fs-6">
                              Max Temp. {weatherData.main.temp_max} °C
                            </ListGroup.Item>
                            <ListGroup.Item className="fs-6">
                              Min Temp. {weatherData.main.temp_min} °C
                            </ListGroup.Item>
                            <ListGroup.Item className="fs-6">
                              Real Feel Temp {weatherData.main.feels_like} °C
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                        {/* FINE CARD INTERNA */}
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </div>
            ) : null}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CityCard;
