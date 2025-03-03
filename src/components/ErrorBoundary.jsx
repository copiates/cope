import { useRouteError, Link } from 'react-router-dom';

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

export default ErrorBoundary; 