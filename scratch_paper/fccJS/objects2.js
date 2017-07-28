//Using objects for Lookups
var alpha = {
    1: "a",
    2: "b",
    3: "c",
    4: "d"
};
console.log(alpha[3]);
//Remove Object Properties
let inventory = {
    potion: 2,
    weapon: "2h sword",
    armor: "none"
};
delete inventory.potion;
console.log(inventory);

//Testing Object Properties
console.log(inventory.hasOwnProperty('weapon'));
console.log(inventory.hasOwnProperty('potion'));

//Accessing and Modifying Nested objects
var ourStorage = {
    desk: {
        drawer: "stapler"
    },
    cabinet: {
        "top drawer": {
            folder1: "a file",
            folder2: "secrets"
        },
        "bottom drawer": "soda"
    }
};
//Generate an Array of all Object Keys
console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);
ourStorage.cabinet["top drawer"].folder2 = "DON'T";
console.log(ourStorage.cabinet["top drawer"].folder2);
