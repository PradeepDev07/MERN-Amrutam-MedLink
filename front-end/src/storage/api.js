import userData from './log.js';

const BASE = 'https://mern-amrutam-medlink.onrender.com';

export async function fetchUsers() {
  try {
    const res = await fetch(`${BASE}/users`);
    if (!res.ok) throw new Error('fetch failed');
    const data = await res.json();
    return data;
  } catch (err) {
    // fallback to local in-memory
    return userData;
  }
}

export async function saveUsers(arr) {
  try {
    const res = await fetch(`${BASE}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(arr),
    });
    if (!res.ok) throw new Error('save failed');
    return true;
  } catch (err) {
    console.warn('Failed to save to server, not persisted:', err);
    return false;
  }
}

export async function addUserToServer(user) {
  try {
    const res = await fetch(`${BASE}/users/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!res.ok) throw new Error('add failed');
    return true;
  } catch (err) {
    console.warn('Failed to append user to server file:', err);
    return false;
  }
}
