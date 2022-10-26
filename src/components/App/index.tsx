import { Layout } from '../Layout';
import { AddressPage } from '../../pages/Addresspage';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { HomePage } from '../../pages/Homepage';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="address" element={<AddressPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
