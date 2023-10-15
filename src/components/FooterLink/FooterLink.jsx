/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Button } from "../Button";
import "./style.css";

export const FooterLink = ({
  badge,
  color,
  theme,
  stateProp,
  className,
  buttonTextClassName,
  buttonText = "Overview",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    badge: badge || false,
    color: color || "gray",
    theme: theme || "light",
    state: stateProp || "default",
  });

  return (
    <div
      className={`footer-link ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <Button
        className="button-instance"
        destructive={false}
        hierarchy={state.color === "primary" ? "link-color" : "link-gray"}
        icon="default"
        iconLeading={false}
        iconTrailing={false}
        size="lg"
        stateProp={
          (!state.badge && state.color === "gray" && state.state === "hover" && state.theme === "light") ||
          (state.badge && state.state === "hover" && state.theme === "light")
            ? "hover"
            : "default"
        }
        text={!state.badge ? buttonText : "Overview"}
        textClassName={`${
          state.badge && state.color === "gray" && state.theme === "dark" && state.state === "default" && "class-41"
        } ${
          state.badge && state.state === "default" && state.theme === "dark" && state.color === "primary" && "class-42"
        } ${state.badge && state.theme === "dark" && state.state === "hover" && "class-43"} ${
          !state.badge && buttonTextClassName
        }`}
      />
      {state.badge && (
        <div className={`badge color-${state.color} theme-${state.theme}`}>
          <div className="text-9">New</div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

FooterLink.propTypes = {
  badge: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "gray"]),
  theme: PropTypes.oneOf(["dark", "light"]),
  stateProp: PropTypes.oneOf(["hover", "default"]),
  buttonText: PropTypes.string,
};
