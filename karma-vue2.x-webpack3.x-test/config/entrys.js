// 获取入口文件
const glob = require('glob');
const path = require('path');
const fs = require('fs');

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

function setEntrys(filepaths, curdir) {
  let files = [], filepth, readable;
  curdir = curdir.replace(/\\/g, '/');
  if (Array.isArray(filepaths) && filepaths.length > 0) {
    filepaths.forEach((elem)=>{
      filepth = elem.replace(/\.html$/, '.js');
      readable = true;
      try {
        fs.accessSync(filepth, fs.constants.R_OK);
      } catch (e) {
        readable = false;
      }
      if (readable) {
        files.push({tpl: elem.replace(curdir, ''), js: filepth.replace(curdir, '')})
      }
    });
  }
  return files;
}

function getEntrys(entry) {
  let pathdata = [], filepaths;
  let curdir = path.join(__dirname, '../');
  let entObjs = {}, filename;

  if (Array.isArray(entry)) {
    for(let item of entry) {
      item = resolve(item);
      filepaths = glob.sync(item + '/**/*.html');
      pathdata = setEntrys(filepaths, curdir);
      pathdata.concat(filepaths);
    }
  } else if (typeof entry === 'string') {
    entry = resolve(entry);
    filepaths = glob.sync(entry + '/**/*.html');
    pathdata = setEntrys(filepaths, curdir);
  }

  pathdata.forEach((el)=>{
    filename = el.tpl.match(/[a-zA-z]+[\w\-]+\.html$/ig, '');
    if (filename && filename[0]) {
      entObjs[filename[0].replace('.html', '')] = el;
    }
  });

  return entObjs;
}

module.exports = getEntrys;
