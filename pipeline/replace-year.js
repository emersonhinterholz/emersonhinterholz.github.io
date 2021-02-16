const replace = require('replace-in-file');
const options = {
  files: '*.*',
  from: /%%year%%/g,
  to: new Date().getFullYear()
};

replace.sync(options);