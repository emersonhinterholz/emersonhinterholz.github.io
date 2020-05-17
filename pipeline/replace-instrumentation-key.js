const replace = require('replace-in-file');
const options = {
  files: '*.*',
  from: /%%instrumentationKey%%/g,
  to: '4c64e005-e066-424d-b05b-2ed4869bb2b7'
};

replace.sync(options);