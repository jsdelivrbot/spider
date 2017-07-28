//object initializer
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.color;

myCar["year"] = 1969;
console.log(myCar["model"]);

console.log(myCar.make);
console.log(myCar.color);

myCar["space in property"] = "or even hyphens";
console.log(myCar["space in property"]);

function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
    }
    return result;
}

console.log(showProps(myCar, "myCar"));

//constructor function
function Player(name, elo) {
    this.name = name;
    this.elo = elo;
}

var player = new Player("jawn", 1200);
var player2 = new Player("jon", 1200);
console.log(player);
console.log(player2);
player.win = 0;
console.log(player);

//creation: object.create
var Animal = {
    type: "cat",
    displayType: function () {
        console.log("type: " + this.type);
    }
}

var cat = Object.create(Animal);
var dog = Object.create(Animal);
dog.type = "dog";
cat.displayType();
dog.displayType();
