//Find
let arr = ['a', 'b', 'c']

//find attribute let's you find a specified string in array
//the value parameter is equivalent to the values in the array above
arr.find(value => value == 'a')
//Outputs string "a"

//Object inside an array
let arr = [
    { name: 'Vincent'},
    {age: 20},
    {gender: 'Male'}
]
arr.find(value => value.name == "Vincent")
//Outputs object {name: 'Vincent'}