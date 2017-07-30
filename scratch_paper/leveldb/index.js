var levelup = require('levelup');

var db = levelup('./db');

db.put('name', 'LevelUP', function (err) {
    if (err)
        return console.log('Ooops!', err)
})

db.get('name', function (err, name) {
    console.log(name)
})
