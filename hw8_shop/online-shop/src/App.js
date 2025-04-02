import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Registration from "./pages/Registration/Registration";
import Catalog from "./pages/Catalog/Catalog";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";


function App() {
  return (
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
          </Routes>
        </main>
  );
}

export default App;
