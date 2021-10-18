//Axios is a promise already so always use .then
//.then and .catch is somehow a checking method if the request is success or not
axios({
    //URL link of Data and the method used ex. get/post
    url: 'https://jsonplaceholder.typicode.com/posts',
    methos: 'GET'

}).then((fromResolved)=> {
    //Outputs success and the data 
    //.data attributes displays directly the data from the API
    console.log("Success: ",fromResolved.data)

}).catch((fromReject) => {
    //Outputs failes and the data 
    console.log("Failes: ",fromReject)

})

//Implementinf AXIOS into a function
//put axios into a variable
const fetch = () => {
    const results = axios({
        //URL link of Data and the method used ex. get/post
        url: 'https://jsonplaceholder.typicode.com/posts',
        methos: 'GET'
    
    }).then((fromResolved)=> {
        //Outputs success and the data 
        //.data attributes displays directly the data from the API
        console.log("Success: ",fromResolved.data)
    
    }).catch((fromReject) => {
        //Outputs failes and the data 
        console.log("Failes: ",fromReject)
    
    })
    //this return result will have a value whether from resolve or reject
    return results
}
//this data variable is from resolve/reject whether what results is returned
fetch().then((data) => {
    console.log(data)
})



