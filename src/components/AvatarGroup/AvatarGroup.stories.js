import { AvatarGroup } from ".";

export default {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  argTypes: {
    size: {
      options: ["md", "xs", "sm"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    addMoreButton: true,
    moreUsers: true,
    size: "md",
    className: {},
    avatarSizeXlPlaceholderClassName: {},
    avatarAvatarContrastWeightHeavyClassName: {},
    avatarSizeXlPlaceholderClassNameOverride: {},
    avatarAvatarContrastWeightHeavyClassNameOverride: {},
    avatarSizePlaceholderClassName: {},
    avatarAvatarContrastWeightRegularClassName: {},
    avatarSizePlaceholderClassNameOverride: {},
    avatarAvatarContrastWeightRegularClassNameOverride: {},
    avatarSizeLgPlaceholderClassName: {},
    avatarAvatarContrastWeightLightClassName: {},
    visible: true,
    visible1: true,
    visible2: true,
    visible3: true,
    visible4: true,
  },
};
