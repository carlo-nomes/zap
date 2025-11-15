import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./common/ErrorBoundary";

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
