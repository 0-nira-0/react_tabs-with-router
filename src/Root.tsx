import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { Tab } from './components/Tab';
import { TabsPage } from './components/TabsPage';
import { PageNotFound } from './components/PageNotFound';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />}></Route>
        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId?" element={<Tab />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  </Router>
);
