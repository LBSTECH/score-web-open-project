import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseMap from './components/roadscore/BaseMap.jsx';
import TestTileSet from './components/roadscore/TestTileSet.jsx'
import Pro from './components/roadscore/pro.jsx'
import Pro2 from './components/roadscore/Pro2.jsx'
import Pro3 from './components/roadscore/Pro3.jsx'
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
function Layout() {
  return (
    <>
      <Routes>
        <Route path="/cju" element={<TestTileSet />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/pro2" element={<Pro2 />} />
        <Route path="/pro3" element={<Pro3 />} />
        <Route path="/" element={<BaseMap />} />
      </Routes>
    </>
  );
}

export default App;