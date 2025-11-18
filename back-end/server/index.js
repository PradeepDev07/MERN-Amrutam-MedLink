import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const DATA_PATH = path.resolve(process.cwd(), 'src', 'storage', 'users.json');

function readUsers() {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read users.json', err);
    return [];
  }
}

function writeUsers(arr) {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(arr, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Failed to write users.json', err);
    return false;
  }
}

app.get('/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

// Replace entire users array
app.post('/users', (req, res) => {
  const body = req.body;
  if (!Array.isArray(body)) {
    return res.status(400).json({ error: 'Expected array' });
  }
  const ok = writeUsers(body);
  if (!ok) return res.status(500).json({ error: 'Failed to write file' });
  res.json({ success: true });
});

// append single user
app.post('/users/add', (req, res) => {
  const user = req.body;
  if (!user || typeof user !== 'object') return res.status(400).json({ error: 'Invalid user' });
  const users = readUsers();
  users.push(user);
  const ok = writeUsers(users);
  if (!ok) return res.status(500).json({ error: 'Failed to write file' });
  res.json({ success: true, user });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`User storage server listening on http://localhost:${port}`);
});
