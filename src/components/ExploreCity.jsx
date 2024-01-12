import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const cities = [
  {
    name: "Rome",
    image: "https://cdn.pixabay.com/photo/2020/05/17/12/56/rome-5181486_1280.jpg",
    link: "/city/rome",
  },
  {
    name: "Paris",
    image: "https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708_1280.jpg",
    link: "/city/paris",
  },
  {
    name: "New York",
    image: "https://cdn.pixabay.com/photo/2020/01/10/20/05/new-york-4756152_1280.jpg",
    link: "/city/new-york",
  },
  {
    name: "Tokyo",
    image: "https://cdn.pixabay.com/photo/2021/05/01/09/59/city-6220689_1280.jpg",
    link: "/city/tokyo",
  },
  {
    name: "Seoul",
    image: "https://cdn.pixabay.com/photo/2022/08/31/15/07/seoul-7423593_1280.jpg",
    link: "/city/seoul",
  },
  // Aggiungi altre città con i loro dati
];

const ExploreCity = () => {
  return (
    <Row className="my-3 mx-4">
      <Col sm={11}>
        <Carousel>
          {cities.map((city, index) => (
            <Carousel.Item key={index}>
              <Link to={city.link}>
                <div style={{ height: "300px" }}>
                  <img className="d-block w-100" src={city.image} alt={`${city.name} Carousel`} />
                </div>

                <Carousel.Caption>
                  <h3>{city.name}</h3>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default ExploreCity;
