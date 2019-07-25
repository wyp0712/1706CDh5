const fs = require('fs');
const http = require('http');
const path = require('path');







function copy(src, dist) {
  let paths = [];
  let fileState = fs.statSync(src);
  var res = fs.readdirSync(path.join('./src'));

  res.forEach(pathItem => {

    let srcPath = path.join(__dirname, pathItem)
    console.log(srcPath, 'pathItem')
    
    // if (pathItem.isFile()) {
    //   var res = fs.readdirSync(path.join('./src'));
    //   console.log(res, 'res')
    // } else if (fileState.isDirectory()) {
    //   //  copy()
    // }
  })




}

copy(path.join('./src'))


