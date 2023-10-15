/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { MinusCircle2 } from "../../icons/MinusCircle2";
import { PlusCircle5 } from "../../icons/PlusCircle5";
import "./style.css";

export const FaqItem = ({
  icon = true,
  expanded,
  divider,
  breakpoint,
  iconPosition,
  className,
  textClassName,
  text = "Is there a free trial available?",
  supportingTextClassName,
  text1 = "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  textClassNameOverride,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    expanded: expanded || true,
    divider: divider || false,
    breakpoint: breakpoint || "desktop",
    iconPosition: iconPosition || "right",
  });

  return (
    <div
      className={`FAQ-item breakpoint-0-${state.breakpoint} divider-${state.divider} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`content breakpoint-1-${state.breakpoint} ${state.iconPosition}`}>
        {state.iconPosition === "left" && (
          <>
            <>
              {icon && (
                <div className="icon-wrap">
                  {state.expanded && <MinusCircle2 className="instance-node" color="#98A2B3" />}

                  {!state.expanded && <PlusCircle5 className="instance-node" color="#98A2B3" />}
                </div>
              )}
            </>
          </>
        )}

        <div className="text-and-supporting">
          <p
            className={`text-wrapper ${
              state.iconPosition === "right" && !state.expanded
                ? textClassNameOverride
                : state.iconPosition === "right" && state.expanded
                ? textClassName
                : undefined
            }`}
          >
            {text}
          </p>
          {state.expanded && (
            <p className={`supporting-text ${state.iconPosition === "right" ? supportingTextClassName : undefined}`}>
              {text1}
            </p>
          )}
        </div>
        {state.iconPosition === "right" && (
          <>
            <>
              {icon && (
                <div className="icon-wrap">
                  {state.expanded && <MinusCircle2 className="instance-node" color="#98A2B3" />}

                  {!state.expanded && <PlusCircle5 className="instance-node" color="#98A2B3" />}
                </div>
              )}
            </>
          </>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (
    state.breakpoint === "desktop" &&
    state.divider === false &&
    state.expanded === true &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: false,
          expanded: false,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === false &&
    state.expanded === true &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: false,
          expanded: false,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === true &&
    state.expanded === true &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: true,
          expanded: false,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === true &&
    state.expanded === true &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: true,
          expanded: false,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === false &&
    state.expanded === false &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: false,
          expanded: true,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === false &&
    state.expanded === false &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: false,
          expanded: true,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === true &&
    state.expanded === false &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: true,
          expanded: true,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === true &&
    state.expanded === false &&
    state.iconPosition === "right"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: true,
          expanded: true,
          iconPosition: "right",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === false &&
    state.expanded === true &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: false,
          expanded: false,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === false &&
    state.expanded === true &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: false,
          expanded: false,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === true &&
    state.expanded === true &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: true,
          expanded: false,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === true &&
    state.expanded === true &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: true,
          expanded: false,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === false &&
    state.expanded === false &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: false,
          expanded: true,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === false &&
    state.expanded === false &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: false,
          expanded: true,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.divider === true &&
    state.expanded === false &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",
          divider: true,
          expanded: true,
          iconPosition: "left",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.divider === true &&
    state.expanded === false &&
    state.iconPosition === "left"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",
          divider: true,
          expanded: true,
          iconPosition: "left",
        };
    }
  }

  return state;
}

FaqItem.propTypes = {
  icon: PropTypes.bool,
  expanded: PropTypes.bool,
  divider: PropTypes.bool,
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  iconPosition: PropTypes.oneOf(["right", "left"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
