import React from "react";

import ComponentLibrary from "./ComponentLibrary";

export default {
  component: ComponentLibrary,
  title: "ButtonComponentChallenge/ComponentLibrary",
};

const Template = (args) => <ComponentLibrary {...args} />;

export const Default = Template.bind({});
