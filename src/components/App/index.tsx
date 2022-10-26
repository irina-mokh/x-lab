import { Layout } from '../Layout';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { HomePage } from '../../pages/Homepage';
import { AddressPage } from '../../pages/Addresspage';
import { TablesPage } from '../../pages/TablesPage';
import { CalendarPage } from '../../pages/CalendarPage';
import { MapsPage } from '../../pages/MapsPage';
import { WidgetsPage } from '../../pages/WidgetsPage';
import { SettingsUserPage } from '../../pages/SettingsUserPage';
import { SettingsFinancePage } from '../../pages/SettingsFinancePage';
export const App = () => {
  return (
    <div className="App">
      <h1 className="visually-hidden">Wrench CRM</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="address" element={<AddressPage />} />
            <Route path="tables" element={<TablesPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="maps" element={<MapsPage />} />
            <Route path="widgets" element={<WidgetsPage />} />
            <Route path="settings-user" element={<SettingsUserPage />} />
            <Route path="settings-finance" element={<SettingsFinancePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
