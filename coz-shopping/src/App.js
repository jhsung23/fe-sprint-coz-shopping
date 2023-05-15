import './App.css';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
