import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/products/" element={<ProductsView />} />
        <Route path="/products/:productName" element={<ProductDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
