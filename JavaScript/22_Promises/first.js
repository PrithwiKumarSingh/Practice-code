


let Promises = fetch("http://api.weatherapi.com/v1/current.json?key=e20d9e1db15e4b2e8b3160202250406&q=London&aqi=yes");

// const pro2 = Promises.then((response)=>{
//     // console.log(response);

//     // const pro2 = response.json();
//     // pro2.then((data)=>{
//     //     console.log(data);
//     // })


//     return response.json();
// })

// pro2.then((data)=>{
//     console.log(data);
// })


// Promises.then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// }) 

//  Same code but optomize 

// Promises.
// then(response=>response.json())
// .then(data=>console.log(data));


// third methods 

fetch("http://api.weatherapi.com/v1/current.json?key=e20d9e1db15e4b2e8b3160202250406&q=Bihar&aqi=yes")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));

