//A basic Callback function

let x = function () {
    console.log("I am function x");
};

let y = function (callback) {
    console.log('do Something');
    callback();
}

y(x);

//Why do we need callback functions ?

let calc = function (num1, num2, calcType) {

    if (calcType === "add") {
        return num1 + num2;
    } else if (calcType === "multiply") {
        return num1 * num2;
    } else if (calcType === "subtract") {
        return num1 - num2;
    }
};


console.log(calc(2, 3, "multiply"));


/* 
The above function  can be improved by implementing add, multiply, subtract functions
separately and passing it as a callback to calc function. This makes our code more readable 
and maintainable
 */

let add = function (a, b) {
    return a + b;
}

let subtract = function (a, b) {
    return a - b;
}

let multiply = function (a, b) {
    return a * b;
}

let doWhatever = function (a, b) {
    console.log(`here are your two numbers back ${a}, ${b}`);
}

let improvedCalc = function (num1, num2, callback) {
    return callback(num1, num2);
};

console.log(improvedCalc(2, 4, add));
console.log(improvedCalc(1, 5, doWhatever));


/* We can also pass our callback as an anonymous function */
console.log(improvedCalc(3, 5, function (a, b) {
    return a - b;
}));

//Practical Examples of callbacks
var myArr = [{
    num: 5,
    str: 'apple'
}, {
    num: 7,
    str: 'orange'
}, {
    num: 23,
    str: 'banana'
}];

//passing a callback function as a parameter to sort function
myArr.sort(function (val1, val2) {

    //sorts the myArr according to str property
    if (val1.str < val2.str) {
        return -1;
    } else {
        return 1;
    }
});

console.log(myArr);