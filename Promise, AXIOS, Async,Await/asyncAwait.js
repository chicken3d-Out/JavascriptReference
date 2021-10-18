//Async Await doesn't need to have .then to echo results
//Assign asnyc at the function
let fetch = async () => {
    //Promise has to variable, resolve and reject
    return new Promise((resolve, reject) => {
        let data = false
        
        setTimeout(()=> {
            data = true
            resolve(data)
        })
    })
}
//the data variable is from the resolve if the condition was meet true
//this function is job to display 
let display = (data) => {
    console.log("Display: ",data)
}
//fetched data from the above function is stored here
//make a variable that stores the function with await
const fetchedData = await fetch()

//display the fetched data with await
display(fetchedData)

//Many functions at a time resolved using async || await

let displayName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve always have the data returned
            resolve('Vincent')
        }, 3000)
    })
}

let displayAge = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve always have the data returned
            resolve(20)
        }, 5000)
    })
}

let displayGender = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve always have the data returned
            resolve('Male')
        }, 6000)
    })
}
//To Output the data just put Await into the function u want initialized above
console.log("Name: ", await displayName())
console.log("Age: ", await displayAge())
console.log("Gender: ", await displayGender())

//how to output the function in one go.... Just put it in 1 function
const displayDetails = async () => {
    //always make sure to put async in the function || then await on the desired output base on heirarchy
    console.log("Name: ",await displayName())
    console.log("Age: ",await displayAge())
    console.log("Gender: ",await displayGender())
}
//to Output displatDetails function put await on it..
await displayDetails()


