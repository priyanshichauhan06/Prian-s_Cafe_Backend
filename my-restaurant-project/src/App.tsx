import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LogIn from './Component/Pages/LogIn/LogIn';
import Navigationbar from './Component/Container/Navigationbar';
import Home from './Component/Container/Home';
import ViewMenu from './Component/Pages/Menu/ViewMenu';
import ViewCategories from './Component/Pages/Categories/ViewCategories';
import ViewDishes from './Component/Pages/Dishes/ViewDishes';
import CreateDish from './Component/Pages/Dishes/CreateDish';
import CreateCategory from './Component/Pages/Categories/CreateCategory';
import ViewCategoryByMenuId from './Component/Pages/Categories/ViewCategoryByMenuId';
import ViewDishesByCatId from './Component/Pages/Dishes/ViewDishesByCatId';
import EditDish from './Component/Pages/Dishes/EditDish';
import EditCategory from './Component/Pages/Categories/EditCategory';
import AboutUs from './Component/Container/AboutUs';
import ContactUs from './Component/Container/ContacUs';

const AppRoutes = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isHomePage = location.pathname === '/home';

  return (
    <>
      {!isHomePage && !isLoginPage && <Navigationbar/>}
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/menu" element={<ViewMenu />} />
        <Route path="/category" element={<ViewCategories />} />
        <Route path="/dish" element={<ViewDishes />} />
        <Route path="/createdish" element={<CreateDish />} />
        <Route path="/createcategory" element={<CreateCategory />} />
        <Route path="/categorymenu/:menuId" element={<ViewCategoryByMenuId />} />
        <Route path="/dishcategory/:categoryId" element={<ViewDishesByCatId />} />
        <Route path="/editcategory/:Id" element={<EditCategory />} />
        <Route path="/editdish/:Id" element={<EditDish />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
