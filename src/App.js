import "./App.css";
import Dictionary from "./dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">Dictionary app</header>
        <main>
          <Dictionary defaultKeyword="happiness" />
        </main>
      </div>{" "}
    </div>
  );
}
