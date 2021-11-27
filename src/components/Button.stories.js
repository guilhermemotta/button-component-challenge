import React from "react";

import { Button } from "./Button";

export default {
  component: Button,
  title: "ButtonComponentChallenge/Button",
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
