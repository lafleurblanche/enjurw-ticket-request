/* mui5 */
import CssBaseline from '@mui/material/CssBaseline';

/* react-dom */
import { createRoot } from 'react-dom/client';

/* react-router-dom */
import { BrowserRouter } from 'react-router-dom';

/* recoil */
import { RecoilRoot } from 'recoil';

/* src */
import { App } from 'App';

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <CssBaseline />
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);
