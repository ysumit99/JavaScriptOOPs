var a = 10;
document.write(a + " " + b + "<br>");
var b = 20;
document.write(a + " " + b + "<br>");
/**
 * interpreted as
 *  var a;
 *  var b;
 *  a = 10;
 *  document.write(a + " " + b + "<br>");
 *  b = 20;
 * document.write(a + " " + b);
 */


var i = "Hello";
document.write(i + "<br>");
function show() {
    document.write(i + "<br>");
    var i = "cppcoder";
    document.write(i + "<br>");
}
show();

/*
   var i;
   i = "Hello";
   document.write(i + "<br>");

   function show() {

        var i; //undefined
        document.write(i + "<br>");
        i = "cppcoder";
        document.write(i + "<br>");

    }
    show();
*/