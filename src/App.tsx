import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/Layout/Admin/Admin';
import ProductAdminPage from './pages/Admin/products';
import UserLayout from './components/Layout/User/User';
import Home from './pages/Home';
import Add from './pages/Admin/products/Add';
import Edit from './pages/Admin/products/Edit';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Navigate to='products' />} />
          <Route path='products'>
            <Route index element={<ProductAdminPage />} />
            <Route path='add' element={<Add />} />
            <Route path='edit/:id' element={<Edit />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
