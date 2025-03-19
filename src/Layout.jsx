import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import { ComponentErrorBoundary } from './components/ErrorBoundary';
import { Footer } from './containers';
import PageMetadata from './components/PageMetadata';

const Layout = () => {
  return (
    <>
      {/* Default metadata - will be overridden by page-specific metadata */}
      <PageMetadata 
        title="BV Swami & Co - Professional Services"
        description="BV Swami & Co provides professional accounting, tax, and business registration services in India."
      />
      <Navbar />
      <main>
        <ComponentErrorBoundary>
          <Outlet />
        </ComponentErrorBoundary>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
