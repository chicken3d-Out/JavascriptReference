//Promise is made to wait first function to finish 
//before jumping to another function/action
const fetch = () =>{
    let data = false
    setTimeout(() => {
        data = true

    }, 3000)

    return data
}

//Promise example in fetching data
let fetch = () => {
    //Promise has to variable, resolve and reject
    return new Promise((resolve, reject) => {
        let data = false

        setTimeout(() => {
            data = true
            //resolve the data
            resolve(data)
        }, 3000)
    })
}
//this function let display the queried data
 let display = (data) => {
     console.log("Display: ",data)
 }
//if the Promise function is finished then do this
 fetch().then((fromResolve) => {
     //the .then fromResolve variable is from Promise's resolved data
     display(fromResolve)
 })

 //Resolve and Reject
 let fetch = () => {
    //Promise has to variable, resolve and reject
    return new Promise((resolve, reject) => {
        let a = 2
        if (a == 2){
            resolve(true)
        } else {
            reject(false)
        }
    })
}
//check the fetch function
fetch().then((fromResolved) => {
    //Outputs if the fetch function is corrects
    console.log("Success: ",fromResolved)
}).catch((fromReject) => {
    //fromReject variable in catch is from fetch's rejected data
    //Outputs only if the fetch function return false
    console.log("Failed: ",fromReject)
})



