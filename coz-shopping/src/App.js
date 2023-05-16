import './App.css';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import ListPage from './pages/ListPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="products/list" element={<ListPage title={'itemList'} />} />
        <Route path="bookmark" element={<ListPage title={'bookmarkList'} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
