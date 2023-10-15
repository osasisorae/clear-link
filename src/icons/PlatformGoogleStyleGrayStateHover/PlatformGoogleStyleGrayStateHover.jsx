/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlatformGoogleStyleGrayStateHover = ({ color = "#667085", className }) => {
  return (
    <svg
      className={`platform-google-style-gray-state-hover ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_2_8518)">
        <path
          className="path"
          clipRule="evenodd"
          d="M16.8426 6.54781C15.6036 5.36611 13.9501 4.72235 12.2392 4.74881C9.10863 4.74881 6.44981 6.86086 5.5018 9.70486V9.70493C4.99913 11.1953 4.99913 12.8091 5.50179 14.2994H5.50619C6.45861 17.139 9.11303 19.2511 12.2437 19.2511C13.8597 19.2511 15.247 18.8378 16.3223 18.1077V18.1047C17.5878 17.2669 18.452 15.9486 18.721 14.4582H12.2393V9.83722H23.558C23.6991 10.6397 23.7653 11.4599 23.7653 12.2756C23.7653 15.9254 22.4609 19.0112 20.1913 21.1012L20.1937 21.103C18.2051 22.9373 15.4757 24 12.2392 24C7.70204 24 3.55286 21.4426 1.51575 17.3904V17.3904C-0.186243 13.9996 -0.186239 10.0048 1.51576 6.61398H1.51579L1.51575 6.61395C3.55286 2.55737 7.70204 -4.58262e-05 12.2392 -4.58262e-05C15.22 -0.0353205 18.0992 1.08465 20.2686 3.12176L16.8426 6.54781Z"
          fill={color}
          fillRule="evenodd"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_2_8518">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

PlatformGoogleStyleGrayStateHover.propTypes = {
  color: PropTypes.string,
};
