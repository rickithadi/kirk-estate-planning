import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Consultation from './pages/Consultation';
import Wills from './pages/Wills';
import Trusts from './pages/Trusts';
import Values from './pages/Values';
import Emily from './pages/Emily';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/wills" element={<Wills />} />
        <Route path="/trusts" element={<Trusts />} />
        <Route path="/values" element={<Values />} />
        <Route path="/emily" element={<Emily />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
