import React from "react";
import { Spring } from "react-spring/renderprops";

export default function SpringJumbo() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: 100 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{ duration: 1000, delay: 200 }}
    >
      {(props) => (
        <div className="jumbotron jumbotron-fluid" style={props}>
          <div className="container">
            <h1 className="display-4">Redux Part 2</h1>
            <p className="lead">
              Redux with Client / Server communication | React Spring Animations
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}
