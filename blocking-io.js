const fs = require('fs');

function moreWork() {
  console.log('More work is being done');
}

const data = fs.readFileSync('./test.txt', { encoding: 'utf8', flag: 'r' });
console.log(data);
moreWork();
