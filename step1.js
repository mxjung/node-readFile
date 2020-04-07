const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(err, data){
  if (err) {
    console.log('Error occurred.');
    process.exit(1);
  } else {
    console.log('data read: ', data);
  }
})