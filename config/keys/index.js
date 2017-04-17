import path from 'path';

let keys;

if (process.env.NODE_ENV === 'production') {
  keys = require('./production.js');
} else {
  keys = require('./development.js');
}

export default keys;
