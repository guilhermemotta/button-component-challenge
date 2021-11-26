import React from 'react';

import { Button } from './Button';

export default {
  component: Button,
  title: 'ButtonComponentChallenge/Button',
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  label: 'Disabled Shadow',
  disableShadow: true,
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
  label: 'Danger',
};