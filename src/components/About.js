import React, { useEffect, useState } from "react";
import "../App.css";

function About() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const apiURL = "https://randomuser.me/api";
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
