import { Outlet } from 'react-router-dom';
import { Navbar } from './components';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
