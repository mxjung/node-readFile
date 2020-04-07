const fs = require('fs');
const axios = require('axios');

async function webCat (url) {
  // Try to make request to cmd line provided url
  // If not found, console log error code
  try {
    // Make var, so that resp is function-scoped and we can
    // access it after try/catch
    var resp = await axios.get(url);
  } catch(e) {
    console.log('Error fetching ', url);
    console.log('Error code: ', e.code);
    process.exit(1);   
  } 

  // Don't include inside try, 
  // only want to test the axios call
  console.log(resp);
  process.exit(0);
}

function cat(filePath) {
  // Read file from cmd line provided file name
  // End process 0 for success and 1 for error

  fs.readFile(filePath, 'utf8', function(err, data){
    if (err) {
      console.log('Error occurred.');
      process.exit(1);
    } else {
      console.log('data read: ', data);
    }
  })
}

// Determine cmd line input argument and call
// either webCat (if input is url) and cat if
// input is a file path

if (process.argv[2].includes('http')) {
  webCat(process.argv[2]);
} else {
  cat(process.argv[2]);
}

