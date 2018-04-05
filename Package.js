"use strict";
exports.__esModule = true;
var HelloWorld_1 = require("./HelloWorld");
var person = new HelloWorld_1.Person("Hari", 32, "Kolkota");
function printValues(obj) {
    console.log(obj.getName());
}
function greeting(message) {
    console.log("Hello !! " + message);
}
var greeting2 = function (message) {
    console.log(message);
};
var greeting3 = function () {
    console.log("Hi");
};
var sum = function (x, y) {
    console.log(x + y);
};
// sum(46,90);
var message = "sdfsdfdf";
// greeting(message);
printValues(person);
