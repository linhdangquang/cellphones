import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/Layout/Admin/Admin';
import ProductAdminPage from './pages/Admin/products';
import UserLayout from './components/Layout/User/User';
import Home from './pages/Home';
import Add from './pages/Admin/products/Add';
import Edit from './pages/Admin/products/Edit';
import CategoriesAdminPage from './pages/Admin/categories';
import Product from './pages/Home/product';
import { ScrollToTop } from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import CartPage from './pages/Home/cart';
import SignIn from './pages/Home/signin';
import SignUp from './pages/Home/signup';
import CategoryProduct from './pages/Home/category';
import Guard from './components/Guard';

function App() {
  return (
    <div className='App'>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path='products'>
              <Route index element={<h1>Product Page</h1>} />
              <Route path=':id' element={<Product />} />
            </Route>
            <Route path='categories'>
              <Route path=':categoryName' element={<CategoryProduct />} />
            </Route>
            <Route path='cart' element={<CartPage />} />
          </Route>
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route
            path='admin'
            element={
              <Guard>
                <AdminLayout />
              </Guard>
            }
          >
            <Route index element={<Navigate to='products' />} />
            <Route path='products'>
              <Route index element={<ProductAdminPage />} />
              <Route path='add' element={<Add />} />
              <Route path='edit/:id' element={<Edit />} />
            </Route>
            <Route path='categories'>
              <Route index element={<CategoriesAdminPage />} />
            </Route>
          </Route>
        </Routes>
        <ToastContainer
          position='bottom-right'
          autoClose={3000}
          hideProgressBar={false}
        />
      </ScrollToTop>
    </div>
  );
}

export default App;
