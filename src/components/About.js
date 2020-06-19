import React, { useEffect, useState } from "react";
import "../style/style.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShareIcon from "@material-ui/icons/Share";
function About() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count) {
      console.log("hi");
    }
  });
  return (
    <div>
      <React.Fragment>
        <div className="gridcontainer">
          <div className="story"></div>

          <div className="container about">
            <img
              onDoubleClick={() => setCount(count + 1)}
              src="https://8images.cgames.de/images/gamestar/4/just-cause-3-doge-meme_2724847.jpg"
              alt=""
            ></img>
            <div>
              <ThumbUpAltIcon
                className="btn"
                onClick={() => setCount(count + 1)}
              ></ThumbUpAltIcon>
              <ChatBubbleIcon className="btn"></ChatBubbleIcon>
              <ShareIcon className="btn"></ShareIcon>
            </div>
            <p>Liked by {count} people.</p>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default About;
