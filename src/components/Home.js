import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Review from "./Review";
import Footer from "./Footer";
import dio from "../img/dio.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <div className="home">
      <section className="showcase">
        <div className="info">
          <h1>dio brando</h1>
          <p>li ming is cute though. armin is a kek and is a snowflake</p>
          <p>
            li ming li ming li ming li ming li ming li ming li ming li ming li
            ming li ming li ming{"aas"}
          </p>
          <p>lorem ipsum </p>
          <p>Minh + Sao Chi = {"<3"} </p>
          <p
            dangerouslySetInnerHTML={{
              __html: "YUNA²",
            }}
          ></p>
          <p>lorem ipsum lorem ipsum lorem ipsum</p>
          <p>li ming lorem ipsum</p>
          <p>
            li minglorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. at vero eos et accusam et justo
            duo dolores et ea rebum. stet clita kasd gubergren, no sea takimata
            sanctus est lorem ipsum dolor sit amet. lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. at vero
            eos et accusam et justo duo dolores et ea rebum. stet clita kasd
            gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.
          </p>
          <p>cloud, aerith</p>
          <Link to="about">
            <button className="btn-info">read more</button>
          </Link>
        </div>
      </section>
      <Review />
      {/*adding Carousel later, dio is placeholder*/}
      <img style={style} src={dio} alt="" />
      <Footer />
    </div>
  );
}

const style = {
  width: "100%",
  boxShadow: "0 -2px 5px #333",
};
export default Home;
