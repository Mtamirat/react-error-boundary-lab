import Dashboard from "./components/Dashboard";
import WeatherWidget from "./components/WeatherWidget";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const simulateCrash = true;
  // const simulateCrash = false;

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Error Boundary Demo</h1>

      <Dashboard />

      <ErrorBoundary>
        <WeatherWidget shouldCrash={simulateCrash} />
      </ErrorBoundary>
    </div>
  );
}

export default App;