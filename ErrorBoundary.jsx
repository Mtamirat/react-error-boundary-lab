import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            border: "2px solid red",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
            backgroundColor: "#ffe5e5"
          }}
        >
          <h2>⚠ Weather Widget Temporarily Unavailable</h2>
          <p>Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;