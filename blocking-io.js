const fs = require('fs');

function moreWork() {
  console.log('More work is being done');
}

const data = fs.readFileSync('./test.txt');
console.log('data');
moreWork();
