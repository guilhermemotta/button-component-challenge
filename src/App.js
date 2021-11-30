import logo from "./logo.svg";
import "./App.css";

import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>Button Component Challenge</h1>

      <div className="row">
        <div className="button-card">
          <header className="button-card__header">
            <code>{"<Button />"}</code>
          </header>
          <main className="button-card__content">
            <Button />
          </main>
        </div>
      </div>

      <div className="row">
        <div className="button-card">
          <header className="button-card__header">
            <code>{'<Button variant="outline" />'}</code>
          </header>
          <main className="button-card__content">
            <Button variant="outline" />
          </main>
        </div>
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
          <Button color="primary" disableShadow />
        </main>
      </div>

      <div className="row">
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
      </div>

      <div className="row">
        <div className="button-card">
          <header className="button-card__header">
            <code>{'<Button size="sm" />'}</code>
          </header>
          <main className="button-card__content">
            <Button color="primary" size="sm" />
          </main>
        </div>

        <div className="button-card">
          <header className="button-card__header">
            <code>{'<Button size="md" />'}</code>
          </header>
          <main className="button-card__content">
            <Button color="primary" size="md" />
          </main>
        </div>

        <div className="button-card">
          <header className="button-card__header">
            <code>{'<Button size="lg" />'}</code>
          </header>
          <main className="button-card__content">
            <Button color="primary" size="lg" />
          </main>
        </div>
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
