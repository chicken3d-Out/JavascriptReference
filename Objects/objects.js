//Creating an object//
let obj = {
    name: 'Vincent',
    age: 23
}
//display propert from an object
console.log(obj.name)
//displays Vincent

//get only the keys of the object
console.log(Object.keys(obj))
//displays array of keys
//["name", "age"]
console.log(Object.values(obj))
//displays array of values
//[Vincent, 23]

let obj = {
    name: 'Vincent',
    age: 23
}
console.log(Object.entries(obj))
//Outputs 2 array
//First Array is first key and value
//Second Array is the second key and value

//Object Assign//
//Add properties to an existing object
Object.assign(obj, {gender:'Male'})

//Override value of a property
Object.assign(obj, {age:21, bloodType:'O'})

//Override property Second Option
obj.age = 20

//Spread Operator//
let objA = {
    name: 'Vincent',
    age: 23
}
//Copies all the properties from objA to objB
let objB = { ...objA}

//assign new value with spread operator
let objB = { ...objA, course: 'IT'}

//Combine 3 objects to objectD
let objectA = { name: 'Vincent', age: 20 }
let objectB = { bloodType: 'O', gender: 'male' }
let objectC = { course: 'IT', address: 'Sta.Fe' }

let obejectD = { ...objectA, ...objectB, ...objectC}

//Destructure//
//Initializing an object
let object = {
    name: 'Vincent',
    age: 23,
    gender:'Male',
    address: 'Sta. Fe'
}
//Destructuring//
const { name, age, gender, address} = object 
//Calling it by simple
console.log(name)

//Loops//
//Initializing an object
let object = {
    name: 'Vincent',
    age: 23,
    gender:'Male',
    address: 'Sta. Fe'
}
//Looping Foreach
Object.keys(obj).forEach(values => {
    console.log(`${values}:`, obj[values])
    //the Object.keys(obj) gets the keys of the obj like name, age...
    //${values} outputs the keys,
    //obj[values] outputs the property of the key
})

//Initializing an object
let object = {
    name: 'Vincent',
    age: 23,
    gender:'Male',
    address: 'Sta. Fe'
}
//Looping For Loop
for (let i =0; i<Object.keys(obj).length; i++){
    console.log(object[Object.keys(obj)[i]])
    //Similar to console.log(obj[name])
}

//for in//
//gets all the keys from the object
let object_keys = Object.keys(object)

for (const i in object_keys){
    console.log(object[object_keys[i]])
    //Similar to console.log(obj[name])
}

//for of//
for (const values of object_keys){
    console.log(obj[values])
    //Similar to console.log(obj[name])...
}

//Entries using for of
let objKeys = Object.entries(object)

for (const [key, values] of objKeys){
    console.log(obj[values])
}







