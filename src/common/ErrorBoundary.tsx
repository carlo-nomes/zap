import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.MODE === "development") {
      console.error("Error caught by boundary:", error, errorInfo);
    }

    // Call optional error handler
    this.props.onError?.(error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      // Use custom fallback or default error UI
      return this.props.fallback || <DefaultErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback = ({ error }: { error: Error | null }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "2rem",
      textAlign: "center",
      backgroundColor: "var(--colors-gray-100, #f5f5f5)",
      color: "var(--colors-gray-900, #1a1a1a)",
    }}
  >
    <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚡ Oops! Something went wrong</h1>
    <p style={{ marginBottom: "2rem", maxWidth: "600px" }}>
      We encountered an unexpected error. Please try refreshing the page.
    </p>
    {import.meta.env.MODE === "development" && error && (
      <details style={{ marginTop: "1rem", textAlign: "left", maxWidth: "800px" }}>
        <summary style={{ cursor: "pointer", marginBottom: "0.5rem" }}>Error Details (Dev Only)</summary>
        <pre
          style={{
            padding: "1rem",
            backgroundColor: "var(--colors-gray-200, #e0e0e0)",
            borderRadius: "4px",
            overflow: "auto",
            fontSize: "0.875rem",
          }}
        >
          {error.stack}
        </pre>
      </details>
    )}
    <button
      onClick={() => window.location.reload()}
      style={{
        marginTop: "2rem",
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
        backgroundColor: "var(--colors-primary, #f3d458)",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "500",
      }}
    >
      Refresh Page
    </button>
  </div>
);

export default ErrorBoundary;
