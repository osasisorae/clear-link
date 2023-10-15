/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckCircle5 } from "../../icons/CheckCircle5";
import { TypeDefaultSize2XlColorSuccess } from "../../icons/TypeDefaultSize2XlColorSuccess";
import { TypeDefaultSizeLgColorPrimary } from "../../icons/TypeDefaultSizeLgColorPrimary";
import { TypeDefaultSizeMdColorGray } from "../../icons/TypeDefaultSizeMdColorGray";
import { TypeDefaultSizeSmColorPrimary } from "../../icons/TypeDefaultSizeSmColorPrimary";
import { TypeDefaultSizeXlColorSuccess } from "../../icons/TypeDefaultSizeXlColorSuccess";
import { TypeDefaultSizeXsColorSuccess } from "../../icons/TypeDefaultSizeXsColorSuccess";
import { TypeFilledSize2XlColorGray } from "../../icons/TypeFilledSize2XlColorGray";
import { TypeFilledSizeLgColorSuccess } from "../../icons/TypeFilledSizeLgColorSuccess";
import { TypeFilledSizeMdColorGray } from "../../icons/TypeFilledSizeMdColorGray";
import { TypeFilledSizeSmColorSuccess } from "../../icons/TypeFilledSizeSmColorSuccess";
import { TypeFilledSizeXlColorPrimary } from "../../icons/TypeFilledSizeXlColorPrimary";
import { TypeFilledSizeXsColorGray } from "../../icons/TypeFilledSizeXsColorGray";
import "./style.css";

export const CheckIcon = ({ type, size, color, typeLineSizeSmClassName }) => {
  return (
    <>
      {size === "sm" && type === "default" && (
        <TypeDefaultSizeSmColorPrimary
          className="instance-node-4"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {type === "filled" && size === "sm" && (
        <TypeFilledSizeSmColorSuccess
          className="instance-node-4"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}

      {type === "line" && (
        <div className={`check-icon size-4-${size} ${color} ${typeLineSizeSmClassName}`}>
          {size === "two-xl" && (
            <CheckCircle5
              className="check-circle"
              color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
            />
          )}
        </div>
      )}

      {size === "xs" && type === "default" && (
        <TypeDefaultSizeXsColorSuccess
          className="instance-node-5"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {size === "xs" && type === "filled" && (
        <TypeFilledSizeXsColorGray
          className="instance-node-5"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}

      {size === "md" && type === "default" && (
        <TypeDefaultSizeMdColorGray
          className="instance-node-6"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {type === "filled" && size === "md" && (
        <TypeFilledSizeMdColorGray
          className="instance-node-6"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}

      {size === "lg" && type === "default" && (
        <TypeDefaultSizeLgColorPrimary
          className="instance-node-7"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {size === "lg" && type === "filled" && (
        <TypeFilledSizeLgColorSuccess
          className="instance-node-7"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}

      {size === "xl" && type === "default" && (
        <TypeDefaultSizeXlColorSuccess
          className="instance-node-8"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {type === "filled" && size === "xl" && (
        <TypeFilledSizeXlColorPrimary
          className="instance-node-8"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}

      {type === "default" && size === "two-xl" && (
        <TypeDefaultSize2XlColorSuccess
          className="instance-node-9"
          color={color === "gray" ? "#F2F4F7" : color === "success" ? "#DCFAE6" : "#F4EBFF"}
          fill={color === "gray" ? "#667085" : color === "success" ? "#17B26A" : "#9E77ED"}
        />
      )}

      {type === "filled" && size === "two-xl" && (
        <TypeFilledSize2XlColorGray
          className="instance-node-9"
          color={color === "gray" ? "#475467" : color === "success" ? "#079455" : "#7F56D9"}
        />
      )}
    </>
  );
};

CheckIcon.propTypes = {
  type: PropTypes.oneOf(["line", "filled", "default"]),
  size: PropTypes.oneOf(["sm", "xs", "lg", "two-xl", "xl", "md"]),
  color: PropTypes.oneOf(["primary", "gray", "success"]),
};
