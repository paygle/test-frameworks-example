const path = require('path')
const copy = require('copy')
const d = path.resolve(__dirname, '../node_modules/element-ui')

copy(path.resolve(__dirname, './element-ui/**/*.js'), d, function(err, files) {
  if (err) throw err;
  console.log('copying framework JS ', files.length, 'files');
});

copy(path.resolve(__dirname, './element-ui/**/*.ts'), d, function(err, files) {
  if (err) throw err;
  console.log('copying framework TS ', files.length, 'files');
});

copy(path.resolve(__dirname, './element-ui/**/*.scss'), d, function(err, files) {
  if (err) throw err;
  console.log('copying framework SCSS ', files.length, 'files');
});

copy(path.resolve(__dirname, './element-ui/**/*.css'), d, function(err, files) {
  if (err) throw err;
  console.log('copying framework CSS ', files.length, 'files');
});

copy(path.resolve(__dirname, './element-ui/**/*.ttf'), d, function(err, files) {
  if (err) throw err;
  console.log('copying framework TTF ', files.length, 'files');
});

copy(path.resolve(__dirname, './element-ui/**/*.woff'), d, function(err, files) {
  if (err) throw err;
  console.log('copying framework WOFF ', files.length, 'files');
});

copy(path.resolve(__dirname, './element-ui/**/*.jpg'), d, function(err, files) {
  if (err) throw err;
  console.log('copying framework JPG ', files.length, 'files');
});

copy(path.resolve(__dirname, './element-ui/**/*.png'), d, function(err, files) {
  if (err) throw err;
  console.log('copying framework PNG ', files.length, 'files');
});
