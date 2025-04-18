import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Recipe from './pages/Recipe';
import Cart from './pages/Cart';
import TeaGuide from './pages/TeaGuide';
import AssamBlog from './pages/blogs/AssamBlog';
import DarjeelingBlog from './pages/blogs/DarjeelingBlog';
import MasalaCharBlog from './pages/blogs/MasalaCharBlog';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/recipes" element={<Recipe />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/encyclopedia" element={<TeaGuide />} />
            <Route path="/blogs/assam-tea" element={<AssamBlog />} />
            <Route path="/blogs/darjeeling-tea" element={<DarjeelingBlog />} />
            <Route path="/blogs/masala-chai" element={<MasalaCharBlog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;