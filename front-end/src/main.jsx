import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NotificationProvider } from './context/NotificationContext'
import Notifications from './components/Notifications/Notifications'
import App from './App.jsx'
import { MenuProvider } from './context/MenuContext';
import { fetchUsers } from './storage/api';
import { replaceUsers } from './storage/log';
import {StorageProvider} from './context/StorageContext';

async function hydrateAndRender() {
  try {
    const users = await fetchUsers();
    if (Array.isArray(users)) replaceUsers(users);
  } catch (err) {
    // ignore
  }

  // sanity logs to help debug any invalid element type issues
  try {
    // eslint-disable-next-line no-console
    console.log('DEBUG MOUNT', { MenuProvider: typeof MenuProvider, StorageProvider: typeof StorageProvider, App: typeof App, NotificationProvider: typeof NotificationProvider, Notifications: typeof Notifications })
  } catch (e) {}

  createRoot(document.getElementById('root')).render(
    <StrictMode> 
      <MenuProvider>
        <StorageProvider>
          <NotificationProvider>
            <App />
            <Notifications />
          </NotificationProvider>
        </StorageProvider>
      </MenuProvider>
    </StrictMode>,
  );
}

hydrateAndRender();
