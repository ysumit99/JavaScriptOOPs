let obj = { num: 2 };
let obj2 = { num: 5 };

let addToThis = function (a, b, c) {

    return this.num + a + b + c;
};

//call function
console.log(addToThis.call(obj, 1, 2, 3)); //first parameter is this

//apply function
let arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr)); //instead of individual values we pass an array incase of apply.
console.log(addToThis.apply(obj2, arr)); //instead of individual values we pass an array incase of apply.

//bind function
let bound = addToThis.bind(obj);
console.dir(bound);
console.log(bound(1, 2, 3)); //values are passed as individual values similar to call.