/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { User01 } from "../../icons/User01";
import { User0118 } from "../../icons/User0118";
import { User0127 } from "../../icons/User0127";
import { User0136 } from "../../icons/User0136";
import { User019 } from "../../icons/User019";
import { VerifiedTick17 } from "../../icons/VerifiedTick17";
import { AvatarContrast } from "../AvatarContrast";
import "./style.css";

export const Avatar = ({
  contrastBorder = true,
  size,
  placeholder,
  text,
  statusIcon,
  stateProp,
  className,
  avatarContrastWeightHeavyClassName,
  overlapGroupClassName,
  text1 = "OR",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "xl",
    placeholder: placeholder || false,
    text: text || true,
    statusIcon: statusIcon || "false",
    state: stateProp || "default",
  });

  return (
    <div
      className={`avatar text-${state.text} placeholder-${state.placeholder} ${state.state} ${state.size} ${state.statusIcon} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {((state.placeholder && state.statusIcon === "false") ||
        (state.statusIcon === "company" && !state.text) ||
        (state.statusIcon === "online-indicator" && !state.text) ||
        state.statusIcon === "verified" ||
        state.text) && (
        <div className={`overlap-group ${overlapGroupClassName}`}>
          {(state.statusIcon === "company" ||
            state.statusIcon === "online-indicator" ||
            (state.size === "xs" && state.statusIcon === "verified")) && (
            <>
              <>
                {contrastBorder && (
                  <AvatarContrast
                    className={`${
                      state.size === "xs"
                        ? "class"
                        : state.size === "xl"
                        ? "class-2"
                        : state.size === "lg"
                        ? "class-3"
                        : state.size === "md"
                        ? "class-4"
                        : "class-5"
                    }`}
                    weight={["sm", "xs"].includes(state.size) ? "light" : "regular"}
                  />
                )}
              </>
            </>
          )}

          {state.text && <div className="text">{text1}</div>}

          {state.placeholder && ["two-xl", "xl"].includes(state.size) && (
            <User0136
              className={`${
                state.size === "xl" && ["company", "online-indicator"].includes(state.statusIcon) && "class-6"
              } ${state.size === "two-xl" && ["company", "online-indicator"].includes(state.statusIcon) && "class-7"} ${
                state.statusIcon === "false" && state.size === "xl" && "class-8"
              } ${state.statusIcon === "false" && state.size === "two-xl" && "class-9"}`}
            />
          )}

          {((!state.placeholder && state.statusIcon === "company") ||
            (!state.placeholder && state.statusIcon === "online-indicator") ||
            (state.placeholder && state.size === "two-xl" && state.statusIcon === "company") ||
            (state.placeholder && state.size === "two-xl" && state.statusIcon === "online-indicator") ||
            (state.placeholder && state.size === "xl" && state.statusIcon === "company") ||
            (state.placeholder && state.size === "xl" && state.statusIcon === "online-indicator")) && (
            <div className="avatar-online" />
          )}

          {state.size === "lg" && state.placeholder && (
            <User0127
              className={`${state.statusIcon === "false" && "class-10"} ${
                ["company", "online-indicator"].includes(state.statusIcon) && "class-11"
              }`}
            />
          )}

          {state.placeholder && state.size === "lg" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div className="avatar-company-icon" />
          )}

          {state.size === "md" && state.placeholder && (
            <User0118
              className={`${["company", "online-indicator"].includes(state.statusIcon) && "class-12"} ${
                state.statusIcon === "false" && "class-13"
              }`}
            />
          )}

          {state.placeholder && state.size === "md" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div className="div" />
          )}

          {state.placeholder && state.size === "sm" && <User019 className="user" />}

          {state.placeholder && state.size === "sm" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div className="avatar-company-icon-2" />
          )}

          {state.size === "xs" && state.placeholder && <User01 className="user-01" />}

          {state.placeholder && state.size === "xs" && ["company", "online-indicator"].includes(state.statusIcon) && (
            <div className="avatar-company-icon-3" />
          )}

          {state.statusIcon === "verified" && (
            <VerifiedTick17
              className={`${
                state.size === "xl"
                  ? "class-14"
                  : state.size === "two-xl"
                  ? "class-15"
                  : state.size === "lg"
                  ? "class-16"
                  : state.size === "md"
                  ? "class-17"
                  : state.size === "sm"
                  ? "class-18"
                  : "class-19"
              }`}
            />
          )}
        </div>
      )}

      {state.statusIcon === "false" && !state.text && !state.placeholder && (
        <>
          <>
            {contrastBorder && (
              <AvatarContrast
                className={avatarContrastWeightHeavyClassName}
                weight={["sm", "xs"].includes(state.size) ? "light" : "regular"}
              />
            )}
          </>
        </>
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

Avatar.propTypes = {
  contrastBorder: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "xs", "lg", "two-xl", "sm", "md"]),
  placeholder: PropTypes.bool,
  text: PropTypes.bool,
  statusIcon: PropTypes.oneOf(["company", "false", "verified", "online-indicator"]),
  stateProp: PropTypes.oneOf(["focused", "hover", "default"]),
  text1: PropTypes.string,
};
