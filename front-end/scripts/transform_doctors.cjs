const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../src/doctorsLists.js');
let s = fs.readFileSync(filePath, 'utf8');

// 1) Convert fee strings like "₹1,200.00" to numbers like 1200
s = s.replace(/fee:\s*"₹([\d,]+)(?:\.\d+)?"/g, (m, p1) => {
  const num = Number(p1.replace(/,/g, ''));
  return `fee: ${num}`;
});

// 2) Insert location: "" after featuredReviews blocks when missing
let out = '';
let i = 0;
while (i < s.length) {
  const found = s.indexOf('featuredReviews', i);
  if (found === -1) { out += s.slice(i); break; }
  // copy until found
  out += s.slice(i, found);
  i = found;
  // find the opening brace of featuredReviews
  const colon = s.indexOf(':', i);
  const braceStart = s.indexOf('{', colon);
  if (braceStart === -1) { // unexpected, abort
    out += s.slice(i);
    break;
  }
  // now find the matching closing brace for featuredReviews
  let depth = 0;
  let j = braceStart;
  for (; j < s.length; j++) {
    if (s[j] === '{') depth++;
    else if (s[j] === '}') {
      depth--;
      if (depth === 0) { j++; break; }
    }
  }
  // j is position after the closing brace of featuredReviews
  out += s.slice(i, j);
  i = j;
  // now look ahead until the closing of the doctor object (which should be '},' aligned)
  // We will find the next '},' sequence that closes the doctor object.
  const doctorClose = s.indexOf('\n  },', i); // common pattern used in file
  if (doctorClose === -1) {
    // can't find, just continue
    continue;
  }
  // check if a location: exists between i and doctorClose
  const segment = s.slice(i, doctorClose);
  if (!/\blocation\s*:\s*/.test(segment)) {
    // insert location before doctorClose
    out += s.slice(i, doctorClose);
    out += '\n    location: "",';
    // advance i to doctorClose
    i = doctorClose;
  } else {
    // already has location, just move on
    out += s.slice(i, doctorClose);
    i = doctorClose;
  }
}

// Write back
fs.writeFileSync(filePath, out, 'utf8');
console.log('Transformed doctorsLists.js: fees -> numbers and location field added where missing');
