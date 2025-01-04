// setTimout inside setTimeout 

setTimeout(function (){
    console.log("Hello World");
    setTimeout(function (){
        console.log("Hello Wolrd inside ");
        setTimeout(function(){
            console.log("Hello world inside of inside");
        }, 8000)
    },5000)
}, 1000);

