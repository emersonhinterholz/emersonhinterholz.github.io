const replace = require('replace-in-file');
const options = {
  files: '*.*',
  from: /%%gtag%%/g,
  to: 'UA-131092739-1',
};

replace.sync(options);