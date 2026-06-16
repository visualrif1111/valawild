import { Routes, Route, Navigate } from 'react-router';
import Safari from './pages/Safari';
import Kilimanjaro from './pages/Kilimanjaro';
import Zanzibar from './pages/Zanzibar';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Safari />} />
      <Route path="/kilimanjaro" element={<Kilimanjaro />} />
      <Route path="/zanzibar" element={<Zanzibar />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
