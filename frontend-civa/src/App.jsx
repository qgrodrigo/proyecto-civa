import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import BusList from './pages/BusList';
import BusDetail from './pages/BusDetail';

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<BusList />} />
          <Route path="/bus/:id" element={<BusDetail />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center' }}>Página no encontrada</h2>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
