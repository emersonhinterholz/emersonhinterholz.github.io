const replace = require('replace-in-file');
const options = {
  files: './dist/**/*.*',
  from: /%%year%%/g,
  to: new Date().getFullYear()
};

replace.replaceInFileSync(options);