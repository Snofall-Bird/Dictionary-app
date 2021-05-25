import "./App.css";
import dictionary from "./dictionary-app";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary</header>

      <dictionary defaultKeyword="apple" />
    </div>
  );
}
