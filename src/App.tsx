import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CreateProductPage from './pages/CreateProductPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="buscar" element={<SearchPage />} />
          <Route path="produto/:id" element={<ProductDetailPage />} />
          <Route path="anunciar" element={<CreateProductPage />} />
          <Route path="categorias" element={<CategoriesPage />} />
          <Route path="categoria/:categoryId" element={<CategoryPage />} />
          <Route path="sobre" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
