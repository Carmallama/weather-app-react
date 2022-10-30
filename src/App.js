import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherSearch />
      </header>

      <footer>
        <p>
          {" "}
          <a href="https://github.com/Carmallama/weather-app-react">
            Coded by Carmen -
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
