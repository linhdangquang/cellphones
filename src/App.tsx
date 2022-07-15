import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './components/Layout/Admin/Admin';
import ProductAdminPage from './pages/Admin/products';
import UserLayout from './components/Layout/User/User';

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={<UserLayout/>}>
          <Route index element={<h1>Home</h1>}/>
        </Route>
          <Route path='admin' element={<AdminLayout/>}>
            <Route index element={<ProductAdminPage/>} />
            <Route path='products' element={<ProductAdminPage/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
