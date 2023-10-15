/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../Avatar";
import { AvatarAddButton } from "../AvatarAddButton";
import "./style.css";

export const AvatarGroup = ({
  addMoreButton = true,
  moreUsers = true,
  size,
  className,
  avatarSizeXlPlaceholderClassName,
  avatarAvatarContrastWeightHeavyClassName,
  avatarSizeXlPlaceholderClassNameOverride,
  avatarAvatarContrastWeightHeavyClassNameOverride,
  avatarSizePlaceholderClassName,
  avatarAvatarContrastWeightRegularClassName,
  avatarSizePlaceholderClassNameOverride,
  avatarAvatarContrastWeightRegularClassNameOverride,
  avatarSizeLgPlaceholderClassName,
  avatarAvatarContrastWeightLightClassName,
  visible = true,
  visible1 = true,
  visible2 = true,
  visible3 = true,
  visible4 = true,
}) => {
  return (
    <div className={`avatar-group ${className}`}>
      <div className="avatars">
        <Avatar
          avatarContrastWeightHeavyClassName={avatarAvatarContrastWeightHeavyClassName}
          className={avatarSizeXlPlaceholderClassName}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
          statusIcon="false"
          text={false}
        />
        <Avatar
          avatarContrastWeightHeavyClassName={avatarAvatarContrastWeightHeavyClassNameOverride}
          className={avatarSizeXlPlaceholderClassNameOverride}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
          statusIcon="false"
          text={false}
        />
        <Avatar
          avatarContrastWeightHeavyClassName={avatarAvatarContrastWeightRegularClassName}
          className={avatarSizePlaceholderClassName}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
          statusIcon="false"
          text={false}
        />
        <Avatar
          avatarContrastWeightHeavyClassName={avatarAvatarContrastWeightRegularClassNameOverride}
          className={avatarSizePlaceholderClassNameOverride}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
          statusIcon="false"
          text={false}
        />
        <Avatar
          avatarContrastWeightHeavyClassName={avatarAvatarContrastWeightLightClassName}
          className={avatarSizeLgPlaceholderClassName}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
          statusIcon="false"
          text={false}
        />
        {visible && (
          <Avatar
            avatarContrastWeightHeavyClassName="avatar-instance"
            className={`${size === "sm" ? "class-20" : size === "md" ? "class-21" : "class-22"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text={false}
          />
        )}

        {visible1 && (
          <Avatar
            avatarContrastWeightHeavyClassName="avatar-instance"
            className={`${size === "sm" ? "class-23" : size === "md" ? "class-24" : "class-25"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text={false}
          />
        )}

        {visible2 && (
          <Avatar
            avatarContrastWeightHeavyClassName="avatar-instance"
            className={`${size === "sm" ? "class-26" : size === "md" ? "class-27" : "class-28"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text={false}
          />
        )}

        {visible3 && (
          <Avatar
            avatarContrastWeightHeavyClassName="avatar-instance"
            className={`${size === "sm" ? "class-29" : size === "md" ? "class-30" : "class-31"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text={false}
          />
        )}

        {visible4 && (
          <Avatar
            avatarContrastWeightHeavyClassName="avatar-instance"
            className={`${size === "sm" ? "class-32" : size === "md" ? "class-33" : "class-34"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text={false}
          />
        )}

        {moreUsers && (
          <Avatar
            className={`${size === "sm" ? "class-38" : size === "md" ? "class-39" : "class-40"}`}
            overlapGroupClassName={`${size === "sm" ? "class-35" : size === "md" ? "class-36" : "class-37"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            stateProp="default"
            statusIcon="false"
            text
            text1="+5"
          />
        )}
      </div>
      {addMoreButton && (
        <AvatarAddButton
          className="avatar-add-button-instance"
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
        />
      )}
    </div>
  );
};

AvatarGroup.propTypes = {
  addMoreButton: PropTypes.bool,
  moreUsers: PropTypes.bool,
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
  visible3: PropTypes.bool,
  visible4: PropTypes.bool,
};
