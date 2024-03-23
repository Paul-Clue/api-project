import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/homepage/Home';

export default () => {
  return (
    <Routes>
      <Route index path='/' exact element={<Home />}/>
    </Routes>
  )
};