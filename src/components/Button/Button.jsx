/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Placeholder183 } from "../../icons/Placeholder183";
import { Placeholder206 } from "../../icons/Placeholder206";
import "./style.css";

export const Button = ({
  iconTrailing = true,
  iconLeading = true,
  size,
  hierarchy,
  icon,
  destructive,
  stateProp,
  className,
  textClassName,
  text = "Button CTA",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "md",
    hierarchy: hierarchy || "primary",
    icon: icon || "dot-leading",
    destructive: destructive || false,
    state: stateProp || "default",
  });

  return (
    <button
      className={`button size-11-${state.size} hierarchy-${state.hierarchy} icon-${state.icon} state-0-${state.state} destructive-${state.destructive} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.icon === "dot-leading" && (
        <>
          <div className="dot">
            <div className="dot-2" />
          </div>
          <div className="text-7">{text}</div>
        </>
      )}

      {state.icon === "default" && (
        <>
          <>
            {iconLeading && (
              <>
                <>
                  {["lg", "md", "sm", "xl"].includes(state.size) && (
                    <Placeholder206
                      className="placeholder"
                      color={
                        state.hierarchy === "primary"
                          ? "white"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-color" && state.state === "focused") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "default") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
                          ? "#6941C6"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
                          ? "#475467"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#344054"
                          : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
                          ? "#D6BBFB"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#FDA29B"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-gray" &&
                              state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "tertiary-color" &&
                              state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#D0D5DD"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover")
                          ? "#53389E"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#912018"
                          : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
                          ? "#1D2939"
                          : "#B42318"
                      }
                    />
                  )}

                  {state.size === "two-xl" && (
                    <Placeholder183
                      className="placeholder-183"
                      color={
                        state.hierarchy === "primary"
                          ? "white"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-color" && state.state === "focused") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "default") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
                          ? "#6941C6"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
                          ? "#475467"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#344054"
                          : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
                          ? "#D6BBFB"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#FDA29B"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-gray" &&
                              state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "tertiary-color" &&
                              state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#D0D5DD"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover")
                          ? "#53389E"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#912018"
                          : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
                          ? "#1D2939"
                          : "#B42318"
                      }
                    />
                  )}
                </>
              </>
            )}
          </>
          <div className={`text-8 ${textClassName}`}>{text}</div>
          <>
            {iconTrailing && (
              <>
                <>
                  {["lg", "md", "sm", "xl"].includes(state.size) && (
                    <Placeholder206
                      className="placeholder"
                      color={
                        state.hierarchy === "primary"
                          ? "white"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-color" && state.state === "focused") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "default") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
                          ? "#6941C6"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
                          ? "#475467"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#344054"
                          : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
                          ? "#D6BBFB"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#FDA29B"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-gray" &&
                              state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "tertiary-color" &&
                              state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#D0D5DD"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover")
                          ? "#53389E"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#912018"
                          : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
                          ? "#1D2939"
                          : "#B42318"
                      }
                    />
                  )}

                  {state.size === "two-xl" && (
                    <Placeholder183
                      className="placeholder-183"
                      color={
                        state.hierarchy === "primary"
                          ? "white"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-color" && state.state === "focused") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "default") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
                          ? "#6941C6"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default")
                          ? "#475467"
                          : (!state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                            (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#344054"
                          : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
                          ? "#D6BBFB"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (state.destructive &&
                              state.hierarchy === "secondary-color" &&
                              state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#FDA29B"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "secondary-gray" &&
                              state.state === "disabled") ||
                            (!state.destructive &&
                              state.hierarchy === "tertiary-color" &&
                              state.state === "disabled") ||
                            (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
                          ? "#D0D5DD"
                          : (!state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover")
                          ? "#53389E"
                          : (state.destructive && state.hierarchy === "link-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "link-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                            (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
                          ? "#912018"
                          : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
                          ? "#1D2939"
                          : "#B42318"
                      }
                    />
                  )}
                </>
              </>
            )}
          </>
        </>
      )}

      {((state.icon === "only" && state.size === "lg") ||
        (state.icon === "only" && state.size === "md") ||
        (state.icon === "only" && state.size === "sm") ||
        (state.icon === "only" && state.size === "xl")) && (
        <Placeholder206
          className="placeholder"
          color={
            state.hierarchy === "primary"
              ? "white"
              : (!state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
              ? "#6941C6"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
              ? "#B42318"
              : !state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                ["default", "focused"].includes(state.state)
              ? "#475467"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#344054"
              : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
              ? "#D6BBFB"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#FDA29B"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#D0D5DD"
              : !state.destructive &&
                state.state === "hover" &&
                ["secondary-color", "tertiary-color"].includes(state.hierarchy)
              ? "#53389E"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#912018"
              : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
              ? "#1D2939"
              : undefined
          }
        />
      )}

      {state.icon === "only" && state.size === "two-xl" && (
        <Placeholder183
          className="placeholder-183"
          color={
            state.hierarchy === "primary"
              ? "white"
              : (!state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused")
              ? "#6941C6"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "focused") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "default") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "focused")
              ? "#B42318"
              : !state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                ["default", "focused"].includes(state.state)
              ? "#475467"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "default") ||
                (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "focused") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#344054"
              : state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive
              ? "#D6BBFB"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#FDA29B"
              : (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
                (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")
              ? "#D0D5DD"
              : !state.destructive &&
                state.state === "hover" &&
                ["secondary-color", "tertiary-color"].includes(state.hierarchy)
              ? "#53389E"
              : (state.destructive && state.hierarchy === "secondary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "secondary-gray" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-color" && state.state === "hover") ||
                (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "hover")
              ? "#912018"
              : state.hierarchy === "secondary-gray" && state.state === "hover" && !state.destructive
              ? "#1D2939"
              : undefined
          }
        />
      )}
    </button>
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

Button.propTypes = {
  iconTrailing: PropTypes.bool,
  iconLeading: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  hierarchy: PropTypes.oneOf([
    "tertiary-color",
    "link-color",
    "tertiary-gray",
    "secondary-color",
    "link-gray",
    "primary",
    "secondary-gray",
  ]),
  icon: PropTypes.oneOf(["dot-leading", "only", "default"]),
  destructive: PropTypes.bool,
  stateProp: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  text: PropTypes.string,
};
