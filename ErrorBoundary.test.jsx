import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";
import WeatherWidget from "./WeatherWidget";

describe("Error Boundary", () => {
  test("renders widget normally", () => {
    render(
      <ErrorBoundary>
        <WeatherWidget shouldCrash={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Seattle Weather/i)).toBeInTheDocument();
  });

  test("shows fallback UI when widget crashes", () => {
    render(
      <ErrorBoundary>
        <WeatherWidget shouldCrash={true} />
      </ErrorBoundary>
    );

    expect(
      screen.getByText(/Temporarily Unavailable/i)
    ).toBeInTheDocument();
  });

  test("app continues rendering after error", () => {
    render(
      <>
        <div>Dashboard Content</div>

        <ErrorBoundary>
          <WeatherWidget shouldCrash={true} />
        </ErrorBoundary>
      </>
    );

    expect(screen.getByText(/Dashboard Content/i)).toBeInTheDocument();
  });
});