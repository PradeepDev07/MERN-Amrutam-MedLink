import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MenuProvider } from './context/MenuContext';
import { fetchUsers } from './storage/api';
import { replaceUsers } from './storage/log';

async function hydrateAndRender() {
  try {
    const users = await fetchUsers();
    if (Array.isArray(users)) replaceUsers(users);
  } catch (err) {
    // ignore
  }

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <MenuProvider>
        
        <App />
      </MenuProvider>
    </StrictMode>,
  );
}

hydrateAndRender();
