import path from 'path';
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, '../src/doctorsLists.js');

try {
  const module = await import(url.pathToFileURL(filePath).href);
  console.log('Import successful. doctorsLists length =', module.default.length);
} catch (e) {
  console.error('Import failed:', e);
  process.exit(1);
}
