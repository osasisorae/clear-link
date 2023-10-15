/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CheckCircle16 = ({ color = "#7F56D9", className }) => {
  return (
    <svg
      className={`check-circle-16 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.74992 14L12.2499 17.5L19.2499 10.5M25.6666 14C25.6666 20.4433 20.4432 25.6666 13.9999 25.6666C7.5566 25.6666 2.33325 20.4433 2.33325 14C2.33325 7.55666 7.5566 2.33331 13.9999 2.33331C20.4432 2.33331 25.6666 7.55666 25.6666 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.33333"
      />
    </svg>
  );
};

CheckCircle16.propTypes = {
  color: PropTypes.string,
};
