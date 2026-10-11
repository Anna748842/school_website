import { Route, Routes } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Campus from './pages/Campus';
import Gallery from './pages/Gallery';
import NewsEvents from './pages/NewsEvents';
import Alumni from './pages/Alumni';
import Faculty from './pages/Faculty';
import Achievements from './pages/Achievements';
import NoticeBoard from './pages/NoticeBoard';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Routes>
      {/* Login page has its own layout (no header/footer) */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />

      {/* All public pages share the PublicLayout with header + footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}