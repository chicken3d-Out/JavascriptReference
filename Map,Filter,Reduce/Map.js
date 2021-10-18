//Map is used for manipulating your array
let arr = [
    'Vincent',
    20,
    'Male'
]
arr.map(value => value)
//Outputs the array

arr.map(value => {
    if (value=='Vincent'){
        return console.log("My Name is:",Vincent)
    }
    else {
        return value
    }
})
//Outputs 
["My Name is Vincent", 20, "Male"]

//Object inside an array
let arr = [
    { name: 'Vincent'},
    {age: 20},
    {gender: 'Male'}
]

arr.map (value => {
    if (value.name == 'Vincent'){
        return {...value, bloodtype: 'O'}
    }
    else {
        return value
    }
})
//Expected output
let arr = [
    { name: 'Vincent', bloodtype:"O"},
    {age: 20},
    {gender: 'Male'}
]
