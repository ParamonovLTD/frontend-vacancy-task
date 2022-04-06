import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Search from './Search';
import Token from './Token';

export const PagesRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/token/:id" element={<Token />} />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};
