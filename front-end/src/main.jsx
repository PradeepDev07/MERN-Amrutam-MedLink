import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
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
    console.log('DEBUG MOUNT', { MenuProvider: typeof MenuProvider, StorageProvider: typeof StorageProvider, App: typeof App, ToastContainer: typeof ToastContainer })
  } catch (e) {}

  createRoot(document.getElementById('root')).render(
    <StrictMode> 
      <MenuProvider>
        <StorageProvider>
        <App />
        {typeof ToastContainer === 'function' ? (
          <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
        ) : (
          null
        )}
        </StorageProvider>
      </MenuProvider>
    </StrictMode>,
  );
}

hydrateAndRender();
