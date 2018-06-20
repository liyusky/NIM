const fs = require('fs');
const path = require('path');

const FileType = ['vue', 'scss', 'js'];

var mark = true;

const Template = {
  vue: fs.readFileSync('./dependencies/tempalte/tempalte.vue', 'utf8'),
  scss: fs.readFileSync('./dependencies/tempalte/tempalte.scss', 'utf8'),
  js: fs.readFileSync('./dependencies/tempalte/tempalte.js', 'utf8')
};

function build (dir) {
  new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          dir: dir,
          files: files
        });
      }
    });
  }).then((result) => {
    let dir = result.dir;
    let name = path.basename(dir);
    let files = result.files;

    if (!mark) {
      FileType.forEach(type => {
        let file = name + '.' + type;
        if (!files.includes(file)) {
          fs.writeFile(path.join(dir, file), Template[type], (err) => {
            if (err) throw err;
            console.log(path.join(dir, file) + '创建成功');
          });
        }
      });
    }

    mark = false;

    files.forEach(item => {
      let currentDir = path.join(dir, item);
      fs.stat(currentDir, (err, stats) => {
        if (stats.isDirectory()) {
          return build(currentDir);
        }
      });
    });
  }).catch((err) => {
    console.log(err);
  });
}

build('./src/components');
