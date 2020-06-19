import React from "react";
import "../style/style.css";
import giornoGiovanna from "../img/gg.png";
import cloudStrife from "../img/cs.png";
import aerithGainsborough from "../img/ag.png";
import liMing from "../img/lm.png";

let persons = [
  {
    id: 1,
    photo: giornoGiovanna,
    name: "Giorno Giovanna",
    text:
      "I have a dream and want a peaceful life in Italy. My dad 'D I O' is a vampire by the way...",
  },
  {
    id: 2,
    photo: aerithGainsborough,
    name: "Aerith Gainsborough",
    text:
      "I'm a local florist at sector 5 and a ancient from the planet. And i think i'm falling in love uwu ",
  },
  {
    id: 3,
    photo: cloudStrife,
    name: "Cloud Strife",
    text: "I'm a EX-SOLDIER",
  },
  {
    id: 4,
    photo: liMing,
    name: "Li Ming Lee",
    text:
      "I need more power! I want to be the strongest sorceress in the world >:(",
  },
];

function Review() {
  return (
    <div>
      <h2>Reviews</h2>
      <section className="box-container">
        {/* Mapping through objects */}
        {persons.map((p) => {
          return (
            <React.Fragment key={p.id}>
              <div className="box">
                <img src={p.photo} alt="" />
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
}

export default Review;
