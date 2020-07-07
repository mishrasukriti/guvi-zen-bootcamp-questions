— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -
// Question 1

// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?
// </body>
// </html>

Error on line 7: alert( “I’m JavaScript!’); -> There should be double quote after JavaScript
Correct statement should be: alert( “I’m JavaScript!");


// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -
// Find the culprit and invoke the alert
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// scripts.js
// alert(“I’m invoked!”);
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Error on Line 24 -> <script src=”script.js”></script>. It should be scripts.js instead of script.js


//  — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -
// Explain the below how it works
// explain.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Answer:
1. For line#45: In JavaScript, its not mandaory to put semicolon at the end of the line.
2.  Following command will show 6 in alert:
alert(3 +
1
+ 2);


— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -
// Fix the below to alert Guvi geek
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let admin=9, fname=10.5;
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

Answer: Update script.js with following code:


let admin="", fname="Guvi", lname = "geek";
admin= admin+ fname+ " " + lname;
alert( admin ); // "Guvi geek"


— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -
// Fix the below to alert hello Guvi geek
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let fname=10.5;
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );

ANSWER: update script.js with following:

let fname;
fname = "Guvi";
lname = " geek"
let name = fname+lname;
alert( 'hello ' +  name);
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -


— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -
// Fix the below to alert sum of two numbers
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

ANSWER:

let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));
— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -


— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -
// Fix the below to alert sum of two numbers
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

ANSWER:

let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));


— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -
