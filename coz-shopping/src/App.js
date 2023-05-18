import { Route, Routes } from 'react-router-dom';

import './App.css';
import MainPage from './pages/MainPage';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import ListPage from './pages/ListPage';
import { PATH, MENU } from './lib/constants';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATH.MAIN_PAGE} element={<MainPage />} />
        <Route path={PATH.ITEM_PAGE} element={<ListPage title={MENU.ITEM_PAGE} />} />
        <Route path={PATH.BOOKMARK_PAGE} element={<ListPage title={MENU.BOOKMARK_PAGE} />} />
        <Route path={PATH.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
