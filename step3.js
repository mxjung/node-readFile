const fs = require('fs');

const { cat, webCat } = require('./step2');
// const step2 = require('./step2');

// const filepath = cat(process.argv[4]);


if (process.argv[2] === '--out') {
  if (process.argv[4].includes('http')) {
    fs.writeFile(process.argv[3], webCat(process.argv[4]), 'utf8', function (err) {
      if (err) {
        console.log(err.message);
        process.exit(1);
      } else {
        console.log('Successfully wrote file!')
      }
    })
  } else {
    // process.argv[3] = 'new.txt'
    // process.argv[4] = 'one.txt'
    // const data = cat(process.argv[4]);
    // console.log(data);

    fs.writeFile(process.argv[3], cat(process.argv[4]), 'utf8', function (err) {
      if (err) {
        console.log(err.message);
        process.exit(1);
      } else {
        console.log('Successfully wrote file!')
      }
    })
  }
} else if (process.argv[2].includes('http')) {
  webCat(process.argv[2]);
} else {
  cat(process.argv[2]);
}