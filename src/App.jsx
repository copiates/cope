import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { Home, Services1, Services2, Services3, About } from './Pages';
import { Tax } from './containers';
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
  ITRDocuments
} from './Pages/documents-requirements';
import { ComponentErrorBoundary } from './components/ErrorBoundary';
import './App.css';

// Custom 404 Not Found component
const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ 
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
        404 - Page Not Found
      </h1>
      <p style={{ marginBottom: '2rem' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button 
        onClick={() => navigate('/')}
        style={{
          backgroundColor: '#00509d',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Go back to Home
      </button>
    </div>
  );
};

const App = () => {
  return (
    <ComponentErrorBoundary>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tax" element={<Tax />} />
          <Route path="services">
            <Route path="registration" element={<Services1 />} />
            <Route path="filing" element={<Services2 />} />
            <Route path="financial-services" element={<Services3 />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="documents">
            <Route path="esi" element={<ESI />} />
            <Route path="pf" element={<PF />} />
            <Route path="ptr" element={<PTR />} />
            <Route path="labour" element={<Labour />} />
            <Route path="shops" element={<Shops />} />
            <Route path="gst" element={<GST />} />
            <Route path="proprietorship" element={<Proprietorship />} />
            <Route path="partnership" element={<Partnership />} />
            <Route path="llp" element={<LLP />} />
            <Route path="opc" element={<OPC />} />
            <Route path="private-limited" element={<PrivateLimited />} />
            <Route path="ie-code" element={<IECode />} />
            <Route path="lei" element={<LEI />} />
            <Route path="income-filing" element={<ITRDocuments />} />
          </Route>
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ComponentErrorBoundary>
  );
};

export default App;
