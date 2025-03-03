import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
  ITRDocuments,
  GSTDocuments,
  PTDocuments,
  ESIDocuments,
  PFDocuments,
  ROCDocuments
} from './Pages/documents-requirements';
import './App.css';

const App = () => {
  return (
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
          <Route path="itr" element={<ITRDocuments />} />
          <Route path="gst-documents" element={<GSTDocuments />} />
          <Route path="pt-documents" element={<PTDocuments />} />
          <Route path="esi-documents" element={<ESIDocuments />} />
          <Route path="pf-documents" element={<PFDocuments />} />
          <Route path="roc-documents" element={<ROCDocuments />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
