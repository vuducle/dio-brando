import React, { Component, Fragment } from "react";
import Media from "react-media";
export class About extends Component {
  render() {
    return (
      <div>
        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && <p>I am small!</p>}
              {matches.medium && <p>I am medium!</p>}
              {matches.large && <p>I am large!</p>}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}

export default About;
