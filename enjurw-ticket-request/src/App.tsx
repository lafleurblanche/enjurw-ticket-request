/* react */
import { ReactElement } from 'react';

/* react-router-dom */
import {
  Route,
  Routes
} from 'react-router-dom';

/* pages */
import {
  MainPage, TicketRequestPage
} from 'pages';

export const App = (): ReactElement => {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/enjurw/request" element={<MainPage />} />
        <Route path="/enjurw/request/ticket" element={<TicketRequestPage />} />
    </Routes>
  );
};
