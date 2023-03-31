const fs = require('fs')

if (!fs.existsSync('./assets')) {
  fs.mkdirSync('./assets')
}

const files = fs.readdirSync('./dist/assets');
files.forEach( function ( file ) {
    fs.copyFileSync( `./dist/assets/${file}`, `./assets/${file}` );
} );
fs.copyFileSync('./dist/index.html', './index.html')