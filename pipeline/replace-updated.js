const replace = require('replace-in-file');
const options = {
  files: '*.*',
  from: /%%updated%%/g,
  to: new Date().toISOString()
};

replace.sync(options);