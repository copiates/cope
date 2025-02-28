import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout';
import { Home, Services1, Services2, Services3, About } from './Pages';
import { Tax } from './containers';

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "tax",
          element: <Tax />,
        },
        {
          path: "services/itr",
          element: <Services1 />,
        },
        {
          path: "services/partnership",
          element: <Services2 />,
        },
        {
          path: "services/accounting",
          element: <Services3 />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default router; 