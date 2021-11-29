import logo from "./logo.svg";
import "./App.css";

import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>Button Component Challenge</h1>

      <div className="button-card">
        <header className="button-card__header">
          <code>{"<Button />"}</code>
        </header>
        <main className="button-card__content">
          <Button />
        </main>
      </div>

      <div className="button-card">
        <header className="button-card__header">
          <code>{'<Button variant="outline" />'}</code>
        </header>
        <main className="button-card__content">
          <Button variant="outline" />
        </main>
      </div>

      <div className="button-card">
        <header className="button-card__header">
          <code>{'<Button variant="text" />'}</code>
        </header>
        <main className="button-card__content">
          <Button variant="text" />
        </main>
      </div>

      <div className="button-card">
        <header className="button-card__header">
          <code>{"<Button disableShadow />"}</code>
        </header>
        <main className="button-card__content">
          <Button disableShadow />
        </main>
      </div>

      <div className="button-card">
        <header className="button-card__header">
          <code>{'<Button startIcon="face" />'}</code>
        </header>
        <main className="button-card__content">
          <Button startIcon="face" />
        </main>
      </div>

      <div className="button-card">
        <header className="button-card__header">
          <code>{'<Button endIcon="face" />'}</code>
        </header>
        <main className="button-card__content">
          <Button endIcon="face" />
        </main>
      </div>
      <footer>
        created by{" "}
        <a href="https://devchallenges.io/portfolio/guilhermemotta">
          guilhermemotta
        </a>{" "}
        - <a href="https://devchallenges.io">devChallenges.io</a>
      </footer>
    </div>
  );
}

export default App;
