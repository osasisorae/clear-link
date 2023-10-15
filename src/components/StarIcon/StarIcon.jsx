/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StarIcon = ({ fill, color, className }) => {
  return (
    <div className={`star-icon ${fill} ${className}`}>
      {(fill === "eighty" ||
        fill === "fifty" ||
        fill === "forty" ||
        fill === "ninety" ||
        fill === "one-hundred" ||
        fill === "seventy" ||
        fill === "sixty" ||
        fill === "ten" ||
        fill === "thirty" ||
        fill === "twenty") && (
        <div className="overlap-group-2">
          <img className="star-background" alt="Star background" src="/img/star-background-5.svg" />
          <div className="star">
            <img
              className="img"
              alt="Star"
              src={
                fill === "ten" && color === "gray"
                  ? "/img/star-25.svg"
                  : color === "yellow" && fill === "twenty"
                  ? "/img/star-22.svg"
                  : color === "gray" && fill === "twenty"
                  ? "/img/star-21.svg"
                  : color === "yellow" && fill === "thirty"
                  ? "/img/star-20.svg"
                  : color === "gray" && fill === "thirty"
                  ? "/img/star-19.svg"
                  : color === "yellow" && fill === "forty"
                  ? "/img/star-18.svg"
                  : color === "gray" && fill === "forty"
                  ? "/img/star-17.svg"
                  : fill === "fifty" && color === "yellow"
                  ? "/img/star-16.svg"
                  : color === "gray" && fill === "fifty"
                  ? "/img/star-15.svg"
                  : color === "yellow" && fill === "sixty"
                  ? "/img/star-14.svg"
                  : color === "gray" && fill === "sixty"
                  ? "/img/star-13.svg"
                  : color === "yellow" && fill === "seventy"
                  ? "/img/star-12.svg"
                  : color === "gray" && fill === "seventy"
                  ? "/img/star-11.svg"
                  : fill === "eighty" && color === "yellow"
                  ? "/img/star-10.svg"
                  : color === "gray" && fill === "eighty"
                  ? "/img/star-9.svg"
                  : fill === "ninety" && color === "yellow"
                  ? "/img/star-8.svg"
                  : fill === "ninety" && color === "gray"
                  ? "/img/star-7.svg"
                  : color === "yellow" && fill === "one-hundred"
                  ? "/img/star-6.svg"
                  : color === "gray" && fill === "one-hundred"
                  ? "/img/star-5.svg"
                  : "/img/star-26.svg"
              }
            />
          </div>
        </div>
      )}

      {fill === "zero" && (
        <>
          <img className="star-background" alt="Star background" src="/img/star-background-5.svg" />
          <div className="star-wrapper">
            <img className="star-2" alt="Star" src={color === "gray" ? "/img/star-23.svg" : "/img/star-24.svg"} />
          </div>
        </>
      )}
    </div>
  );
};

StarIcon.propTypes = {
  fill: PropTypes.oneOf([
    "sixty",
    "zero",
    "thirty",
    "eighty",
    "twenty",
    "one-hundred",
    "ten",
    "fifty",
    "forty",
    "ninety",
    "seventy",
  ]),
  color: PropTypes.oneOf(["yellow", "gray"]),
};
