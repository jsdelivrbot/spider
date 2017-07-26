var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2], 'utf8');

function splitString(str, delimiter) {
    var arrayOfStrings = str.split(delimiter);
    return arrayOfStrings.length - 1;
}

console.log(splitString(buffer, '\n'));
