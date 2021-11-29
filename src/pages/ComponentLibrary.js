import React from "react";
import { Button } from "../components/Button";

const ComponentLibrary = () => {
  return (
    <>
      <h1>Button Component Challenge</h1>
      <h2>ComponentLibrary.js</h2>
      <code>{'<Button />'}</code>
      <br />
      <Button />
      <br />
      <code>{'<Button variant="outline" />'}</code>
      <br />
      <Button variant="outline" />
      <br />
      <code>{'<Button variant="text" />'}</code>
      <br />
      <Button variant="text" />
      <br />
      <code>{'<Button disableShadow />'}</code>
      <br />
      <Button disableShadow />
      <br />
      <code>{'<Button startIcon="face" />'}</code>
      <br />
      <Button startIcon="face" />
      <br />
      <code>{'<Button endIcon="face" />'}</code>
      <br />
      <Button endIcon="face" />
      <br />
    </>
  );
};

export default ComponentLibrary;
