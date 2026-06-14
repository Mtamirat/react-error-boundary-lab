# React Error Boundary Lab

## Overview

This project demonstrates how React Error Boundaries can be used to prevent an entire application from crashing when a component encounters an error.

The application simulates a social media dashboard that contains a weather widget. When the weather widget receives corrupted data and throws an error, the Error Boundary catches the error and displays a fallback user interface while keeping the rest of the dashboard functional.

## Features

* React Error Boundary implemented using a Class Component
* Uses `getDerivedStateFromError()`
* Uses `componentDidCatch()`
* Displays a fallback UI when an error occurs
* Prevents the entire application from crashing
* Includes automated tests using Vitest and React Testing Library

## Technologies Used

* React
* Vite
* JavaScript
* Vitest
* React Testing Library

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project folder:

```bash
cd react-error-boundary-lab
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Running Tests

Run the automated test suite:

```bash
npm test
```

## Test Cases

### Normal Cases

1. Weather widget renders successfully when no error occurs.
2. Dashboard components render successfully.
3. Entire application renders correctly with Error Boundary present.

### Edge Cases

1. Weather widget throws an error due to corrupted data.
2. Error Boundary displays fallback UI.
3. Dashboard remains functional after widget failure.

## Project Structure

```text
src/
│
├── components/
│   ├── ErrorBoundary.jsx
│   ├── WeatherWidget.jsx
│   ├── Dashboard.jsx
│   └── ErrorBoundary.test.jsx
│
├── App.jsx
├── main.jsx
└── setupTests.js
```

## Conclusion

This project demonstrates how Error Boundaries improve application reliability and user experience by isolating component failures and preventing full application crashes.
