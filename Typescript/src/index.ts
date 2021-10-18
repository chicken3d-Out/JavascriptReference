//Basic Types
//Int
let id: number = 5
//string
let userName: string = 'Vincent'
//Boolean
let isPublished: boolean = true
//loosely type variable
let x: any = 'Hello'
//Initalize
let age: number
age =20

//Array
let ids: number[] = [1,2,3,4,5]
let array: any =[] = [1,'Hello',2,3]

//Tuple //In particular order
let person : [number, string, boolean] = [1, 'Brad',true]

//Tuple in an array  //Only number and string be in the array
let employee: [number, string][]

employee = [
    [1,'Vincent'],
    [2,'Chloe'],
    [3,'Moretz']
]

//Union
let pid: string | number
pid = '22'

//Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1.Down)
//Ouput 1, by default
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2.Up)
//Output string 'Up'

//Objects
//initialize type
type User = {
    id: number
    name: string
}
//initialize value
const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
let cid: any = 1
//let customerID = <number>cid
let cusId = cid as number

//Functions
function addNum(x:number,y:number): number{
    return x + y
}
console.log(addNum(2,2))
//Outputs 4
function log(message: string | number):void {
    console.log(message)
}
log(2)
log("Hello World")

//Interfaces mostly used in object
//initialize type
interface UserInterface  {
    id: number
    readonly bMonth: string
    name: string
    age?: number
}
//Use UserInterface as extends to it
const user1: UserInterface = {
    id: 1,
    bMonth: 'January',
    name: 'John'
}
//Functions using interface
interface mathFunc {
    (x: number, y:number):number
}
const add: mathFunc = (x:number, y:number):number => x + y
const sub: mathFunc = (x:number, y:number):number => x - y

//Interface used in a class
interface PersonInterface  {
    id: number
    name: string
    register(): string
}

//Classes   //Implements similar to extends
class Person implements PersonInterface {
    //protected, private only access within the class, the default is public
    id: number
    name:string

    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}
//Pass value to the instantiated object
const variable = new Person(1,'Vincent')
console.log(variable)
//Expected Outputs // Person { id: 1, name: 'Vincent' }

console.log(variable.register()) //Vincent is now registered

//SubClass
class Employee extends Person{
    position: string

    constructor(id:number, name:string, position:string ){
        //Only use when variable is initialized from another class
        super(id, name)
        this.position = position
    }
}
const personInfo = new Employee(1,'Vincent','Web-Developer')
console.log(personInfo.position) //Web-Developer

//Generics
//function will get any data type in this function and return any type also as declared
// T is a placeholder of the type, you can declare it bellow
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
//declare the value of T to type Number and String
let strArray = getArray<string>(['Vincent','Mike','BossRod','Fireship'])


















