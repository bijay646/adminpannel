import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store'

import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import PAGES from "./constants/pageRoutes";
import UserAdd from "./pages/UserAdd";

function App() {
  return (
    <Router >
      <Provider store={store}>

        <Routes>
          <Route path={PAGES.HOME} element={<AdminDashboard />} />
          <Route path={PAGES.LOGIN} element={<Login />} />
          <Route path={PAGES.USERADD} element={<UserAdd />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
