'use strict';

const defaultBrowser =
  require('child_process').execSync(`
    reg query HKEY_CURRENT_USER\\Software\\Classes\\http\\shell\\open\\command
  /ve`.replace(/\s/g, ' ')).toString().trim().split(/\t|\s{2,}/).pop().
  match(/".*?"|\S+/)[0].replace(/"/g, '');

console.log(defaultBrowser);