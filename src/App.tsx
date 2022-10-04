import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CartPage from './pages/cartPage';
import FavoritePage from './pages/favoritePage';
import HomePage from './pages/homePage';
import ProductPage from './pages/productPage';
import 'react-toastify/ReactToastify.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailsPage" element={<ProductPage />} />
        <Route path="/favoritePage" element={<FavoritePage />} />
        <Route path="/cartPage" element={<CartPage />} />
      </Routes>
      <ToastContainer
        newestOnTop
        hideProgressBar
        autoClose={3000}
        theme={'colored'}
        limit={3}
      />
    </div>
  );
}

export default App;
