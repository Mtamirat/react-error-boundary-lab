function WeatherWidget({ shouldCrash }) {
    if (shouldCrash) {
      throw new Error("Weather server returned corrupted data");
    }
  
    return (
      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <h3>Seattle Weather</h3>
        <p>🌤 72°F</p>
      </div>
    );
  }
  
  export default WeatherWidget;