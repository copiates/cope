import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

// Component for handling route errors
const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="error-container" style={{ 
      padding: '2rem', 
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f3f4f6'
    }}>
      <h1 style={{ color: '#00509d', marginBottom: '1rem' }}>
        Oops! Something went wrong
      </h1>
      <p style={{ marginBottom: '2rem' }}>
        {error.statusText || error.message || 'Page not found'}
      </p>
      <Link 
        to="/" 
        style={{
          backgroundColor: '#00509d',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          textDecoration: 'none'
        }}
      >
        Go back to Home
      </Link>
    </div>
  );
};

// Class component for handling component errors
class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Component Error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when a component error occurs
      return (
        <div className="error-container" style={{ 
          padding: '2rem', 
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f3f4f6'
        }}>
          <h1 style={{ color: '#00509d', marginBottom: '1rem' }}>
            Something went wrong in this component
          </h1>
          <p style={{ marginBottom: '2rem' }}>
            {this.state.error && this.state.error.toString()}
          </p>
          <Link 
            to="/" 
            style={{
              backgroundColor: '#00509d',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              textDecoration: 'none'
            }}
          >
            Go back to Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
export { ComponentErrorBoundary }; 