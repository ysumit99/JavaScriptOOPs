//Object Prototypes examples
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Reed", 48, "green");


/* We cannot add new property to an existing object constructor*/

//nationality property is added to the prototype of objects not to the Constructor function itself.
Person.nationality = "English";






