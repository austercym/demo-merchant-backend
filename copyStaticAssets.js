
var shell = require('shelljs');
var rimraf = require('rimraf')

rimraf('dist/views', ()=>{
    shell.cp('-R', 'src/views', 'dist/views');
})

rimraf('dist/jwt', ()=>{
    shell.cp('-R', 'src/jwt', 'dist/jwt');
})
