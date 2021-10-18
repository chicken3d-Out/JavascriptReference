
//Array//
//Initializing an array
let arr = ['a', 'b', 'c']
//display the first value
console.log(arr[0])

//Initializing an array
let arr = ['a', 'b', 'c']
//push element to the end of an array
arr.push('d');
//Output
//arr ['a', 'b', 'c', 'd']

//Unshift
//put element to the index 0 or first element
arr.unshift('d')
//Output
//arr ['d', 'a', 'b', 'c']

//Initializing an array
let arr = ['a', 'b', 'c']
//Shift - remove the first element of an array
//returns the removed element
//new array
//arr ['b', 'c']

//Initializing an array
let arr = ['a', 'b', 'c']
//Pop - removed the last element 
//returns the removed element
//new array
arr = ['a', 'b']

//Join
arr.join('-')
//Output to string type- Default ','
"a-b-c"

//Destructure in Array
let arr = ['Vincent', 20, 'Male']
//user bracket in destructuring array
const [ name, age, gender ] = arr

//Spread Operator on Array
let arrA = ['Vincent', 20, 'Male']

const arrB = [...arrB]
//arrB coppies all the properties from arrA
//Projected Output - Warp in Bracket when spreading Array
//arrB =['Vincent',20,'Male']

//Looping thru Array
let arrA = ['Vincent', 20, 'Male']

arr.forEach((value) => {
    console.log('Value: ',value)
})
//the value variable Outputs all the properties of array
//Value: Vincent
//Value: 20
//Value: Male

arr.forEach((value, index) => {
    console.log('Index: ',index)
    console.log('Value: ',value)
})
//the value and index variable Outputs index and value of the array

//for loop
for (let i = 0; i >arr.length; i++){
    console.log("Value: ", arr[i])
}
//Outputs all the value in the array

//for in
for (const i in arr){
    console.log("Index: ",i)
    console.log("Value: ",arr[i])
}

//for of in array
for (const value of arr){
    console.log("Value: ",value)
}


