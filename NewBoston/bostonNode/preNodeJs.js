//working with this
function user() {
    this.name = "";
    this.life = 100;
    this.giveDamage = function doDamage(targetedPlayer) {
        targetedPlayer.life -= 1;
        console.log(this.name + " did 1 damage to " + targetedPlayer.name);
    }
}

//creating new users;
var Jawn = new user();
var Jon = new user();

//creating timeout function
var printBacon = function() {
    console.log("Bacon timeout!");
}

//assigning name value to our new users;
Jawn.name = "Jawn";
Jon.name = "Jon";

//calling giveDamage a property function
Jawn.giveDamage(Jon);
console.log("Jawn: " + Jawn.life);
console.log("Jon: " + Jon.life);

//example of making a new function with prototype method
user.prototype.uppercut = function uppercut(targetedPlayer) {
    targetedPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetedPlayer.name);
}

//calling the prototype
Jawn.uppercut(Jon);
console.log("Jawn: " + Jawn.life);
console.log("Jon: " + Jon.life);

//example of making new object property with prototype
user.prototype.magic = 60;

//calling the prototype
console.log("Magic: " + Jawn.magic);
console.log("Magic: " + Jon.magic);

//calling timeout function
printBacon();
setTimeout(printBacon, 5000);
