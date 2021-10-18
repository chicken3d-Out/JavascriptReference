//Reduce
let ammount = [10,20,30,40,50]

//accumValue will sum data while current value is the value from every element of the array
let sum = ammount.reduce((accumValue, currentValue) => {
    return accumValue += currentValue

}, 0);
//0 is the inital value
//Expected Outputs the sum of the array

//transform array to an array of object
let letters = ['a', 'b', 'c']
let arrObj = letters.reduce((accumValue,currentValue) => {
    return [...accumValue, {letter: currentValue}]
}, [])
//initializing it to object




















//Getting sum using for of
for (const value of amounts){
    //the value variable contains all the values from the array
    sum = sum + value
    //sum += value
}

