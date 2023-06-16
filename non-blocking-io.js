const fs = require('fs');

function moreWork() {
  console.log('More work is being done');
}

fs.readFile('../airtribe-projects/test.txt', { encoding: 'utf8', flag: 'r' }, (err, data) => {
  console.log(data);
});

moreWork();

