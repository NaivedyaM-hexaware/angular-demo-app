"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getCity = function () {
        return this.city;
    };
    Person.prototype.variableDemo = function () {
        var var1 = 12.45;
        var var2 = "Hello World";
        var var3 = true;
        var varArray = [345435, "sdfsdf", false];
    };
    return Person;
}());
exports.Person = Person;
/*
let person = new Person("Hari", 32, "Kolkota");

function printValues(obj:Person){
  console.log(obj.getName());
}

function greeting(message:string){
    console.log("Hello !! "+message);
}

var greeting2 = (message:string) => {
    console.log(message);
}

var greeting3 = () => {
    console.log("Hi");
}

var sum = (x:number, y:number)=>{
    console.log(x+y);
}

// sum(46,90);

let message = "sdfsdfdf";

// greeting(message);
printValues(person);*/ 
