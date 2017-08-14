// Creates a stack
var Stack = function () {
    this.count = 0;
    this.storage = {};
}

// add a value onto the end of the stack
this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
}

// remove and returns the value at the end of the stack
this.pop = () => {
    if (this.count === 0)
        return undefined;

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

this.size = () => {
    return this.count;
}

// Return the value at the end of the stack
this.peek = () => {
    return this.storage[this.count-1];
}

var myStack = new Stack();

myStack.pop();
