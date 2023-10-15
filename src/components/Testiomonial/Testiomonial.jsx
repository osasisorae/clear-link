/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ArrowLeft3 } from "../../icons/ArrowLeft3";
import { ArrowLeft7 } from "../../icons/ArrowLeft7";
import { ArrowRight3 } from "../../icons/ArrowRight3";
import { ArrowRight5 } from "../../icons/ArrowRight5";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { ChevronLeft5 } from "../../icons/ChevronLeft5";
import { ChevronRight1 } from "../../icons/ChevronRight1";
import { ChevronRight4 } from "../../icons/ChevronRight4";
import "./style.css";

export const Testiomonial = ({
  size,
  arrow,
  type,
  stateProp,
  sizeLgArrowLeftClassName,
  arrowLeft7Color = "#667085",
  arrowRight5Color = "#667085",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "lg",
    arrow: arrow || "left",
    type: type || "button-chevron",
    state: stateProp || "default",
  });

  return (
    <>
      {["button-arrow", "button-chevron"].includes(state.type) && (
        <div
          className={`testiomonial size-lg-arrow-left size-2-${state.size} state-${state.state} ${sizeLgArrowLeftClassName}`}
          onMouseEnter={() => {
            dispatch("mouse_enter");
          }}
          onMouseLeave={() => {
            dispatch("mouse_leave");
          }}
        >
          {state.size === "lg" && state.arrow === "left" && state.type === "button-chevron" && (
            <ChevronLeft5
              className="instance-node-2"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}

          {state.arrow === "left" && state.size === "md" && state.type === "button-chevron" && (
            <ChevronLeft
              className="instance-node-3"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}

          {state.size === "lg" && state.arrow === "left" && state.type === "button-arrow" && (
            <ArrowLeft7 className="instance-node-2" color={arrowLeft7Color} />
          )}

          {state.arrow === "left" && state.size === "md" && state.type === "button-arrow" && (
            <ArrowLeft3
              className="instance-node-3"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}

          {state.size === "lg" && state.arrow === "right" && state.type === "button-chevron" && (
            <ChevronRight4
              className="instance-node-2"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}

          {state.arrow === "right" && state.size === "md" && state.type === "button-chevron" && (
            <ChevronRight1
              className="instance-node-3"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}

          {state.size === "lg" && state.arrow === "right" && state.type === "button-arrow" && (
            <ArrowRight5 className="instance-node-2" color={arrowRight5Color} />
          )}

          {state.arrow === "right" && state.size === "md" && state.type === "button-arrow" && (
            <ArrowRight3
              className="instance-node-3"
              color={state.state === "disabled" ? "#D0D5DD" : state.state === "hover" ? "#344054" : "#667085"}
            />
          )}
        </div>
      )}

      {state.type === "arrow" && (
        <img
          className={`testiomonial size-lg-arrow-left-2 size-3-${state.size} ${sizeLgArrowLeftClassName}`}
          alt="Size lg arrow left"
          src={
            state.size === "lg" && state.arrow === "left" && state.state === "disabled"
              ? "/img/size-lg-arrow-left-type-arrow-state-disabled.svg"
              : state.size === "lg" && state.arrow === "left" && state.state === "hover"
              ? "/img/size-lg-arrow-left-type-arrow-state-hover.svg"
              : state.state === "default" && state.arrow === "left" && state.size === "md"
              ? "/img/size-md-arrow-left-type-arrow-state-default.svg"
              : state.size === "md" && state.arrow === "left" && state.state === "disabled"
              ? "/img/size-md-arrow-left-type-arrow-state-disabled.svg"
              : state.arrow === "left" && state.size === "md" && state.state === "hover"
              ? "/img/size-md-arrow-left-type-arrow-state-hover.svg"
              : state.state === "default" && state.size === "lg" && state.arrow === "right"
              ? "/img/size-lg-arrow-right-type-arrow-state-default.svg"
              : state.size === "lg" && state.arrow === "right" && state.state === "disabled"
              ? "/img/size-lg-arrow-right-type-arrow-state-disabled.svg"
              : state.size === "lg" && state.arrow === "right" && state.state === "hover"
              ? "/img/size-lg-arrow-right-type-arrow-state-hover.svg"
              : state.state === "default" && state.arrow === "right" && state.size === "md"
              ? "/img/size-md-arrow-right-type-arrow-state-default.svg"
              : state.size === "md" && state.arrow === "right" && state.state === "disabled"
              ? "/img/size-md-arrow-right-type-arrow-state-disabled.svg"
              : state.arrow === "right" && state.size === "md" && state.state === "hover"
              ? "/img/size-md-arrow-right-type-arrow-state-hover.svg"
              : "/img/size-lg-arrow-left-type-arrow-state-default.svg"
          }
        />
      )}
    </>
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

Testiomonial.propTypes = {
  size: PropTypes.oneOf(["md", "lg"]),
  arrow: PropTypes.oneOf(["right", "left"]),
  type: PropTypes.oneOf(["arrow", "button-arrow", "button-chevron"]),
  stateProp: PropTypes.oneOf(["disabled", "hover", "default"]),
  arrowLeft7Color: PropTypes.string,
  arrowRight5Color: PropTypes.string,
};
