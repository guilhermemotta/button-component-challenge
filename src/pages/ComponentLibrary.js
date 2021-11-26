import React from "react";
import { Button } from "../components/Button";

const ComponentLibrary = () => {
  return (
    <>
      <h1>ComponentLibrary Page</h1>
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
    </>
  );
};

export default ComponentLibrary;
