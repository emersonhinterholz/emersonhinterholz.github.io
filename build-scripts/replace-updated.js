const replace = require('replace-in-file');
const options = {
  files: './dist/**/*.*',
  from: /%%updated%%/g,
  to: new Date().toISOString()
};

replace.replaceInFileSync(options);