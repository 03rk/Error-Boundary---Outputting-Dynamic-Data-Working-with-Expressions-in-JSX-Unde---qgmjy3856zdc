import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  
  render() {
    if (this.state.hasError) {
      return (
        <p id="error">
          This is an error in your app. Please Check again. This message has been generated from error boundary
        </p>
      );
    }
    return <>{this.props.children}</>;
  }
}
export default ErrorBoundary;
