//Filter outputs an array
let arr = [
    'Vincent',
    20,
    'Male'
]
arr.filter(value => value == 'Vincent')
//Outputs ['Vincent'], it is inside an array

//Filter has 2 parameter value and index
//you can use index to find value
arr.filter((value, index) => index == 2)
//Outputs ['Male'] it is in array form

//Object inside an array
let arr = [
    { name: 'Vincent'},
    {age: 20},
    {gender: 'Male'}
]
arr.filter(value => value.name == "Vincent")
//Outputs
['Vincent'] //in a array form