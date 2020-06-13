import React from "react";
import "../App.css";
import "../sectionBox.css";
import giornoGiovanna from "../img/gg.png";
import cloudStrife from "../img/cs.png";
import aerithGainsborough from "../img/ag.png";
import liMing from "../img/lm.png";
import { Carousel } from "react-bootstrap";

function CarouselSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={giornoGiovanna} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={giornoGiovanna} alt="Third slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={giornoGiovanna} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
