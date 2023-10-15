/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Plus1 } from "../../icons/Plus1";
import { Plus8 } from "../../icons/Plus8";
import "./style.css";

export const AvatarAddButton = ({ size, stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "xs",
    state: stateProp || "default",
  });

  return (
    <div
      className={`avatar-add-button size-14-${state.size} state-4-${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {["default", "disabled", "focus"].includes(state.state) && (
        <div className="plus-wrapper">
          {["sm", "xs"].includes(state.size) && (
            <Plus8 className="plus-8" color={state.state === "disabled" ? "#EAECF0" : "#98A2B3"} />
          )}

          {state.size === "md" && (
            <Plus1 className="plus-1" color={state.state === "disabled" ? "#EAECF0" : "#98A2B3"} />
          )}
        </div>
      )}

      {state.state === "hover" && (
        <>
          <div className="overlap">
            <div className="content-2">
              {["sm", "xs"].includes(state.size) && <Plus8 className="plus-8" color="#667085" />}

              {state.size === "md" && <Plus1 className="plus-1" color="#667085" />}
            </div>
            <div className="cursor">
              <div className="lines-wrapper">
                <img className="lines" alt="Lines" src="/img/lines.svg" />
              </div>
            </div>
          </div>
          <div className="tooltip">
            <div className="content-3">
              <div className="text-10">Add user</div>
            </div>
            <img className="tooltip-2" alt="Tooltip" src="/img/tooltip.svg" />
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.size === "xs" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "xs",
          state: "hover",
        };
    }
  }

  if (state.size === "sm" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "sm",
          state: "hover",
        };
    }
  }

  if (state.size === "md" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "md",
          state: "hover",
        };
    }
  }

  if (state.size === "xs" && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          size: "xs",
          state: "hover",
        };
    }
  }

  if (state.size === "sm" && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          size: "sm",
          state: "hover",
        };
    }
  }

  if (state.size === "md" && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          size: "md",
          state: "hover",
        };
    }
  }

  if (state.size === "xs" && state.state === "hover") {
    switch (action) {
      case "click":
        return {
          size: "xs",
          state: "focus",
        };

      case "mouse_leave":
        return {
          size: "xs",
          state: "default",
        };
    }
  }

  if (state.size === "sm" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "sm",
          state: "default",
        };

      case "click":
        return {
          size: "sm",
          state: "focus",
        };
    }
  }

  if (state.size === "md" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "md",
          state: "default",
        };

      case "click":
        return {
          size: "md",
          state: "focus",
        };
    }
  }

  return state;
}

AvatarAddButton.propTypes = {
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  stateProp: PropTypes.oneOf(["disabled", "hover", "focus", "default"]),
};
