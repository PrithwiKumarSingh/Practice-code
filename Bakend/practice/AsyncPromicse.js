// Callbacks, Promises, and async/await

function connectToServer(){
    console.log("connecting to server....");
    setTimeout(function(){
        console.log("server connected.")
    }, 2000);
}

connectToServer();