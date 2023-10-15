/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TypeDefaultSizeLgColorPrimary } from "../../icons/TypeDefaultSizeLgColorPrimary";
import { TypeDefaultSizeMdColorGray } from "../../icons/TypeDefaultSizeMdColorGray";
import { TypeDefaultSizeSmColorPrimary } from "../../icons/TypeDefaultSizeSmColorPrimary";
import { TypeDefaultSizeXlColorSuccess } from "../../icons/TypeDefaultSizeXlColorSuccess";
import { TypeFilledSizeLgColorSuccess } from "../../icons/TypeFilledSizeLgColorSuccess";
import { TypeFilledSizeMdColorGray } from "../../icons/TypeFilledSizeMdColorGray";
import { TypeFilledSizeSmColorSuccess } from "../../icons/TypeFilledSizeSmColorSuccess";
import { TypeFilledSizeXlColorPrimary } from "../../icons/TypeFilledSizeXlColorPrimary";
import { CheckIcon } from "../CheckIcon";
import "./style.css";

export const CheckItemText = ({
  type,
  size,
  color,
  breakpoint,
  className,
  checkIconTypeLineSizeSmClassName,
  textClassName,
  text = "All features and premium support",
}) => {
  return (
    <div className={`check-item-text breakpoint-2-${breakpoint} ${className}`}>
      {type === "default" &&
        ["desktop", "mobile"].includes(breakpoint) &&
        (breakpoint === "desktop" || size === "xl") &&
        (breakpoint === "mobile" || size === "lg") &&
        ["lg", "xl"].includes(size) && (
          <TypeDefaultSizeLgColorPrimary
            className="check-icon"
            color={color === "success" ? "#DCFAE6" : "#F4EBFF"}
            fill={color === "success" ? "#17B26A" : "#9E77ED"}
          />
        )}

      {type === "line" && (
        <CheckIcon
          color={color === "success" ? "success" : "primary"}
          size={
            size === "xl" && breakpoint === "desktop"
              ? "xl"
              : size === "md" || (breakpoint === "mobile" && size === "lg")
              ? "md"
              : size === "sm"
              ? "sm"
              : "lg"
          }
          type="line"
          typeLineSizeSmClassName={checkIconTypeLineSizeSmClassName}
        />
      )}

      {((breakpoint === "desktop" && size === "lg" && type === "default") ||
        (breakpoint === "mobile" && size === "xl" && type === "default") ||
        type === "line") && (
        <div className={`text-wrap size-5-${size} breakpoint-3-${breakpoint}`}>
          <p className={`p ${textClassName}`}>{text}</p>
        </div>
      )}

      {type === "filled" &&
        ["desktop", "mobile"].includes(breakpoint) &&
        (breakpoint === "desktop" || size === "xl") &&
        (breakpoint === "mobile" || size === "lg") &&
        ["lg", "xl"].includes(size) && (
          <>
            <TypeFilledSizeLgColorSuccess className="check-icon" color={color === "success" ? "#079455" : "#7F56D9"} />
            <div className="div-wrapper">
              <p className={`text-2 ${textClassName}`}>{text}</p>
            </div>
          </>
        )}

      {type === "default" && size === "xl" && breakpoint === "desktop" && (
        <>
          <TypeDefaultSizeXlColorSuccess
            className="check-icon-2"
            color={color === "success" ? "#DCFAE6" : "#F4EBFF"}
            fill={color === "success" ? "#17B26A" : "#9E77ED"}
          />
          <div className="text-wrap-2">
            <p className={`text-3 ${textClassName}`}>{text}</p>
          </div>
        </>
      )}

      {type === "filled" && size === "xl" && breakpoint === "desktop" && (
        <>
          <TypeFilledSizeXlColorPrimary className="check-icon-2" color={color === "success" ? "#079455" : "#7F56D9"} />
          <div className="text-wrap-2">
            <p className={`text-3 ${textClassName}`}>{text}</p>
          </div>
        </>
      )}

      {type === "default" && (breakpoint === "mobile" || size === "md") && ["lg", "md"].includes(size) && (
        <>
          <TypeDefaultSizeMdColorGray
            className="check-icon-3"
            color={color === "success" ? "#DCFAE6" : "#F4EBFF"}
            fill={color === "success" ? "#17B26A" : "#9E77ED"}
          />
          <div className={`text-wrap-3 breakpoint-5-${breakpoint} size-7-${size}`}>
            <p className={`text-4 ${textClassName}`}>{text}</p>
          </div>
        </>
      )}

      {type === "filled" && (breakpoint === "mobile" || size === "md") && ["lg", "md"].includes(size) && (
        <>
          <TypeFilledSizeMdColorGray className="check-icon-3" color={color === "success" ? "#079455" : "#7F56D9"} />
          <div className={`text-wrap-4 breakpoint-7-${breakpoint} size-9-${size}`}>
            <p className={`text-5 ${textClassName}`}>{text}</p>
          </div>
        </>
      )}

      {size === "sm" && type === "default" && (
        <>
          <TypeDefaultSizeSmColorPrimary
            className="check-icon-4"
            color={color === "success" ? "#DCFAE6" : "#F4EBFF"}
            fill={color === "success" ? "#17B26A" : "#9E77ED"}
          />
          <div className="text-wrap-5">
            <p className={`text-6 ${textClassName}`}>{text}</p>
          </div>
        </>
      )}

      {type === "filled" && size === "sm" && (
        <>
          <TypeFilledSizeSmColorSuccess className="check-icon-4" color={color === "success" ? "#079455" : "#7F56D9"} />
          <div className="text-wrap-6">
            <p className={`text-6 ${textClassName}`}>{text}</p>
          </div>
        </>
      )}
    </div>
  );
};

CheckItemText.propTypes = {
  type: PropTypes.oneOf(["line", "filled", "default"]),
  size: PropTypes.oneOf(["md", "sm", "lg", "xl"]),
  color: PropTypes.oneOf(["primary", "success"]),
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
};
