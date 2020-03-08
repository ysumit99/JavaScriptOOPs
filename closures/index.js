//Lexical Scoping example
function init() {
    var name = "Sumit";

    function displayName() {
        console.log(name);

    }

    displayName();
}
init();

//Closures
function makeFunc() {
    var name = 'Mozilla';

    function displayName() {
        console.log(name);
    }

    return displayName;
}

var myFunc = makeFunc();
myFunc();

//Factory function using closures
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);// => add5 is a closure
var add10 = makeAdder(10);// => add10 is a closure

console.log(add5(2));
console.log(add10(2));

//Emulating private methods through closures using anonymous functions / IIFE / Module Design Pattern
var counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },

        decrement: function () {
            changeBy(-1);
        },

        value: function () {
            return privateCounter;
        }
    };
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());


counter.decrement();
console.log(counter.value());

//assigning the function to a variable to create different closures
var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },

        decrement: function () {
            changeBy(-1);
        },

        value: function () {
            return privateCounter;
        }
    };
};

//creating several counters
var counter1 = makeCounter();
var counter2 = makeCounter();

alert(counter1.value());  // 0.

counter1.increment();
counter1.increment();
alert(counter1.value()); // 2.

counter1.decrement();
alert(counter1.value()); // 1.
alert(counter2.value()); // 0.
