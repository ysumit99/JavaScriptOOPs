/* Basic usage of call, apply and bind method is to borrow the functionalities from other objects */

let obj = { num: 2 };
let obj2 = { num: 5 };

let addToThis = function (a, b, c) {

    return this.num + a + b + c;
};

//call function
console.log(addToThis.call(obj, 1, 2, 3)); //first parameter is 'this'

//apply function
let arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr)); //instead of individual values we pass an array incase of apply.
console.log(addToThis.apply(obj2, arr)); //instead of individual values we pass an array incase of apply.

//bind function
let bound = addToThis.bind(obj);
console.dir(bound);
console.log(bound(1, 2, 3)); //values are passed as individual values similar to call.


/*Practical usage for call, apply and bind Methods*/


/* Usage of call - example 1 */

let argsToArray = function () {
    console.log(arguments);
    /* This isn't exactly like an array as can be seen from it's __proto__ 
    property. It doesn't have common array methods like slice, splice etc.
    */

};
argsToArray(1, 2, 3);

/* Solution to example 1 */

let ModifiedArgsToArray = function () {
    console.log([].slice.call(arguments)); /* Borrow the functionality from array using call */
}
ModifiedArgsToArray(1, 2, 3);

/* Usage of call - example 2 */

/* Parent Constructor */
let mammal = function (legs) {
    this.legs = legs;
};

/* Sub Constructor */
let cat = function (legs, isDomesticated) {
    mammal.call(this, legs); //inherit the property from parent constructor using call
    this.isDomesticated = isDomesticated;
}

let lion = new cat(4, false);
console.log(lion);


/*  Usage of apply - example 1 */

//find the minimum of the array elements
let numArray = [1, 2, 3];

console.log(Math.min.apply(null, numArray));


/* Usage of bind - example 1 */
let button = function (content) {
    this.content = content;
};

button.prototype.click = function () {
    console.log(`${this.content} clicked`);
};

let newButton = new button('add');

//loosely bound
let looseClick = newButton.click;
looseClick(); // expected: add clicked , actual: undefined click 

//works as expected
let boundButton = newButton.click.bind(newButton);
boundButton();

/* Usage of bind - Example 2  => A little complex */

let myObj = {
    asyncGet(cb) {
        cb(); // a call back function
    },
    parse() {
        console.log('parse called');
    },
    render() {
        this.asyncGet(function () {
            this.parse(); //this refers to 'this.asyncGet' not the 'myObj' object
        });
    }
};

myObj.render(); //expected: parse called,  actual : this.parse is not a function

//Solution

let myObj2 = {
    asyncGet(cb) {
        cb(); // a call back function
    },
    parse() {
        console.log('parse called');
    },
    render() {
        this.asyncGet(function () {
            this.parse();
        }.bind(this)); //It binds outer this to inner this
    }
};

myObj2.render();