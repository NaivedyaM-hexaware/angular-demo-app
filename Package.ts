import {Person} from './HelloWorld';

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
printValues(person);