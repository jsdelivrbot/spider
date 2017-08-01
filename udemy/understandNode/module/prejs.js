//function statement
function meow() {
    console.log("meow");
}
meow();

//function are first-class
function meow2(cat) {
    cat();
}
meow2(meow);

//function expression
var kitty = function() {
    console.log("Wo shi mao");
}
kitty();
//it's first class
function meow2(bao) {
    bao();
}
meow2(kitty);

meow2(function() {
    console.log('hello kitty');
});
