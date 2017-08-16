//file system coremod.
var fs = require('fs');

//file path coremod
var path = require('path');
var websiteHome = "Desktop/100days/bostonNode/coreModules";
console.log(path.normalize(websiteHome));

console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));

fs.writeFileSync("corn.txt", "Corn is good, corn is life");
console.log(fs.readFileSync("corn.txt").toString());

console.log(__dirname);
console.log(__filename);

/*setInterval(function () {
    console.log("beef");
}, 2000);*/
