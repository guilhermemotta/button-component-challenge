import React from "react";

import App from "./App";

export default {
  component: App,
  title: "ButtonComponentChallenge/Pages/DemoPage",
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
