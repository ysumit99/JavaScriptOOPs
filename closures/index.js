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

//creating closures in loops: A common mistake
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function setupHelp() {
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];

    for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i];

        /*
        This doesn't work as expected because item is left pointing to the last entry in helpText
        array. As item variable is declared using 'var'. All three closures share the same lexical env
        The solution is to use more closures or use let keyword.
        */

        document.getElementById(item.id).onfocus = function () {
            showHelp(item.help);
        }
    }
}

setupHelp();

//using a factory function to create more closure to solve above problem
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
    return function () {
        showHelp(help);
    };
}

function setupHelp() {
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];

    for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i];

        /*makeHelpCallback is the factory function that creates an additional closure so each HelpText gets 
        the correct message */
        document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
}

setupHelp();

//Alternative 1. create an IIFE inside the for loop without having to create a factory function
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function setupHelp() {
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];

    for (var i = 0; i < helpText.length; i++) {
        (function () {
            var item = helpText[i];
            document.getElementById(item.id).onfocus = function () {
                showHelp(item.help);
            }
        })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
    }
}

setupHelp();

//Alternative 2. Use 'let' keyword
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function setupHelp() {
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];

    for (var i = 0; i < helpText.length; i++) {
        let item = helpText[i];
        document.getElementById(item.id).onfocus = function () {
            showHelp(item.help);
        }
    }
}

setupHelp();

//Alternative 3. use foreach loop
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function setupHelp() {
    var helpText = [
        { 'id': 'email', 'help': 'Your e-mail address' },
        { 'id': 'name', 'help': 'Your full name' },
        { 'id': 'age', 'help': 'Your age (you must be over 16)' }
    ];

    helpText.forEach(function (text) {
        document.getElementById(text.id).onfocus = function () {
            showHelp(text.help);
        }
    });
}

setupHelp();

//performance considerations

function MyObject(name, message) {
    this.name = name;
    this.message = message;

    /* this is not the best approach as methods are redefined for each object created.
    Methods must be defined on prototype property instead
    */
    this.getName = function () {
        return this.name;
    };

    this.getMessage = function () {
        return this.message;
    };

}

//Methods defined on Prototype Property => The correct way
function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
MyObject.prototype.getName = function () {
    return this.name;
};
MyObject.prototype.getMessage = function () {
    return this.message;
};

