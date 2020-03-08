//Lexical Scoping example
function init() {
    var name = "Sumit";

    function displayName() {
        alert(name);
    }

    displayName();
}
init();

