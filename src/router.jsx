import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout';
import { Home, Services1, Services2, Services3, About } from './Pages';
import { Tax } from './containers';
import ErrorBoundary from './components/ErrorBoundary';
import {
  ESI,
  PF,
  PTR,
  Labour,
  Shops,
  GST,
  Proprietorship,
  Partnership,
  LLP,
  OPC,
  PrivateLimited,
  IECode,
  LEI,
  ITRDocuments,
  GSTDocuments,
  PTDocuments,
  ESIDocuments,
  PFDocuments,
  ROCDocuments

} from './Pages/documents-requirements';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tax",
        element: <Tax />,
      },
      {
        path: "services",
        children: [
          {
            path: "registration",
            element: <Services1 />,
          },
          {
            path: "filing",
            element: <Services2 />,
          },
          {
            path: "financial-services",
            element: <Services3 />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "documents",
        children: [
          {
            path: "itr-documents",
            element: <ITRDocuments />,
          },
          {
            path: "gst-documents",
            element: <GSTDocuments />,
          },
          {
            path: "pt-documents",
            element: <PTDocuments />,
          },
          {
            path: "esi-documents",
            element: <ESIDocuments />,
          },
          {
            path: "pf-documents",
            element: <PFDocuments />,
          },
          {
            path: "roc-documents",
            element: <ROCDocuments />,
          },
          {
            path: "esi",
            element: <ESI />,
          },
          {
            path: "pf",
            element: <PF />,
          },
          {
            path: "ptr",
            element: <PTR />,
          },
          {
            path: "labour",
            element: <Labour />,
          },
          {
            path: "shops",
            element: <Shops />,
          },
          {
            path: "gst",
            element: <GST />,
          },
          {
            path: "proprietorship",
            element: <Proprietorship />,
          },
          {
            path: "partnership",
            element: <Partnership />,
          },
          {
            path: "llp",
            element: <LLP />,
          },
          {
            path: "opc",
            element: <OPC />,
          },
          {
            path: "private-limited",
            element: <PrivateLimited />,
          },
          {
            path: "ie-code",
            element: <IECode />,
          },
          {
            path: "lei",
            element: <LEI />,
          },
        ],
      },
    ],
  },
]);

export default router; 