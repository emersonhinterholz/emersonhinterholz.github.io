const replace = require('replace-in-file');
const options = {
  files: './dist/**/*.*',
  from: /%%gtag%%/g,
  to: 'UA-131092739-1',
};

replace.replaceInFileSync(options);