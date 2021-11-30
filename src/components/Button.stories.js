import React from "react";

import { Button } from "./Button";

export default {
  component: Button,
  title: "ButtonComponentChallenge/Components/Button",
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Outline Button",
  variant: "outline",
};

export const Text = Template.bind({});
Text.args = {
  label: "Text Button",
  variant: "text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  disabled: true,
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  label: "Disabled Shadow Button",
  disableShadow: true,
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  label: "Primary Color Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Color Button",
  color: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Danger Color Button",
  color: "danger",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  label: "Start Icon Button",
  startIcon: "face",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  label: "End Icon Button",
  endIcon: "face",
};

export const SmButton = Template.bind({});
SmButton.args = {
  label: "Small Sized Button",
  size: "sm",
};

export const MdButton = Template.bind({});
MdButton.args = {
  label: "Medium Sized Button",
  size: "md",
};

export const LgButton = Template.bind({});
LgButton.args = {
  label: "Large Sized Button",
  size: "lg",
};
