const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../src/doctorsLists.js');
let s = fs.readFileSync(filePath, 'utf8');

const cities = ["Mumbai","Bengaluru","Chennai","Kolkata","Delhi","Jaipur","Varanasi","Hyderabad"];
let idx = 0;

s = s.replace(/location:\s*"[^"]*"/g, () => {
  const city = cities[idx % cities.length];
  idx++;
  return `location: "${city}"`;
});

fs.writeFileSync(filePath, s, 'utf8');
console.log('Assigned locations to all doctor entries using allowed cities');
