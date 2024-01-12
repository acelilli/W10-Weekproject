import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
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
            `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&appid=${apik}&units=metric`
          );
          if (resp.ok) {
            const data = await resp.json();
            console.log(data);
            setWeather(data);
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
    <Container className="my-5">
      <Row>
        <Col>
          <Card className="border-0 rounded-pill">
            {loading ? (
              <div className="text-center m-3 border-0 rounded-0">
                <Spinner animation="border" variant="info" role="status" className="fs-4 text-center" />
              </div>
            ) : weatherData ? (
              <div>
                <Card.Body className="bg-info-subtle text-start border-0">
                  <Card.Title className="fs-2 ps-2 p-1">
                    {weatherData.name} , {weatherData.sys.country}
                  </Card.Title>
                </Card.Body>
              </div>
            ) : null}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CityCard;
