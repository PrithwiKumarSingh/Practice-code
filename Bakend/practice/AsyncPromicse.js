// Callbacks, Promises, and async/await

// function connectToServer(){
//     console.log("connecting to server....");
//     setTimeout(function(){
//         console.log("server connected.")
//     }, 2000);
// }

// connectToServer(); 

function connectToServer(){
    console.log("connecting to server....");

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("connected...");
        }, 2000);
    })
}
connectToServer()
.then(function(response){
    console.log(response);
});