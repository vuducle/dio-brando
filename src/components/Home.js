import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Home extends Component {
  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  render() {
    return (
      <div className="home">
        <section className="showcase">
          <div className="info">
            <h1>dio brando</h1>
            <p>li ming is cute though. armin is a kek and is a snowflake</p>
            <p>
              li ming li ming li ming li ming li ming li ming li ming li ming li
              ming li ming li ming{" aas"}
            </p>
            <p>lorem ipsum </p>
            <p>lorem ipsum </p>
            <p>lorem ipsum lorem ipsum lorem ipsum</p>
            <p>li ming lorem ipsum</p>
            <p>
              li minglorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. at vero eos et accusam et justo
              duo dolores et ea rebum. stet clita kasd gubergren, no sea
              takimata sanctus est lorem ipsum dolor sit amet. lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. at vero eos et accusam et justo duo dolores et ea rebum.
              stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum
              dolor sit amet.
            </p>
            <p>cloud, aerith</p>
            <Link to="about">
              <button className="btn-info">read more</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
