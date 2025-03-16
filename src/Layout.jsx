import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import { ComponentErrorBoundary } from './components/ErrorBoundary';
import { Footer } from './containers';
import CanonicalTag from './components/CanonicalTag';

const Layout = () => {
  return (
    <>
      <CanonicalTag />
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
