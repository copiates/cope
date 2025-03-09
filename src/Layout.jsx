import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import { ComponentErrorBoundary } from './components/ErrorBoundary';
import { Footer } from './containers';

const Layout = () => {
  return (
    <>
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
