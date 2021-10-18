"use strict";
//Basic Types
//Int
let id = 5;
//string
let userName = 'Vincent';
//Boolean
let isPublished = true;
//loosely type variable
let x = 'Hello';
//Initalize
let age;
age = 20;
//Array
let ids = [1, 2, 3, 4, 5];
let array = [] = [1, 'Hello', 2, 3];
//Tuple //In particular order
let person = [1, 'Brad', true];
//Tuple in an array  //Only number and string be in the array
let employee;
employee = [
    [1, 'Vincent'],
    [2, 'Chloe'],
    [3, 'Moretz']
];
//Union
let pid;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
//Ouput 1, by default
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
//initialize value
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion
let cid = 1;
//let customerID = <number>cid
let cusId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 2));
//Outputs 4
function log(message) {
    console.log(message);
}
log(2);
log("Hello World");
//Use UserInterface as extends to it
const user1 = {
    id: 1,
    bMonth: 'January',
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes   //Implements similar to extends
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
//Pass value to the instantiated object
const variable = new Person(1, 'Vincent');
console.log(variable);
//Expected Outputs // Person { id: 1, name: 'Vincent' }
console.log(variable.register()); //Vincent is now registered
//SubClass
class Employee extends Person {
    constructor(id, name, position) {
        //Only use when variable is initialized from another class
        super(id, name);
        this.position = position;
    }
}
const personInfo = new Employee(1, 'Vincent', 'Web-Developer');
console.log(personInfo.position); //Web-Developer
//Generics
//function will get any data type in this function and return any type also as declared
// T is a placeholder of the type, you can declare it bellow
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
//declare the value of T to type Number and String
let strArray = getArray(['Vincent', 'Mike', 'BossRod', 'Fireship']);
