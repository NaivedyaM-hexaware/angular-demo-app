
export class Person {

    
    private name:string;
    private age:number;
    private city:string;

    constructor(name:string, age?:number, city?:string){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    public getName(){
        return this.name;
    }
    public getAge(){
        return this.age;
    }
    public getCity(){
        return this.city;
    }

    public variableDemo(){
        let var1:number = 12.45;
        let var2:string = "Hello World";
        let var3:boolean = true;
        let varArray:any=[345435,"sdfsdf",false];
   
    }
}
