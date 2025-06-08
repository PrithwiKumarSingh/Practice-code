cart = ["pizza", "coke", "sandwich"];

// function placeOrder(cart, callback){
//     console.log("Talking With Domino's");

//     setTimeout(()=>{
//         console.log("Order placed Succesfully");
//         const order = {orderId: 221, food: cart, restaurant: "Dominos", location: "Motihari"};
//         callback(order);
//     }, 2000);
// };

// function preparingOrder(order,callback){
//     console.log("Pizza preparation started.....");

//     setTimeout(()=>{
//         console.log("Pizza preparation Done");
//         const foodDetails ={token: 12, restaurant: order.restaurant, location: order.location};
//         callback(foodDetails);
//     }, 5000)
// };

// function pickupOrder(foodDetails,callback){
//     console.log("Reaching restaurant for picking order");

//     setTimeout(()=>{
//         console.log("Order picked up by Delivery Boy");
//         const droplocation = foodDetails.location;
//         callback(droplocation);
//     },3000)
// };

// function deliverOrder(droplocation){
//     console.log("Delivery boy on the way ......");

//     setTimeout(()=>{
//         console.log("Order Delivered succesfully");
//     },5000);
// };


// callback Hell 
// placeOrder(()=>{
//     preparingOrder(()=>{
//         pickupOrder(()=>{
//             deliverOrder();
//         });
//     });
// });


// through Promises 


function placeOrder(cart){
    console.log("Talking With Domino's");

    const pr = new Promise(function(resolve,reject){

            setTimeout(()=>{
                const foodAvailable = true;
                if(foodAvailable){
                console.log("Order placed Succesfully");
                const order = {orderId: 221, food: cart, restaurant: "Dominos", location: "Motihari"};
                resolve(order);
            } else {
                console.log("Items Out of stcok");
                 }
            }, 2000);
    })
    return pr;


};

function preparingOrder(order){
    console.log("Pizza preparation started.....");
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            const tokenDetails = true;
            if(tokenDetails){
            console.log("Pizza preparation Done");
            const foodDetails ={token: 12, restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
            } else{
                console.log("Token Details not available");
            }
        }, 5000)
    })
        return pr;

};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order");
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            const locationDetails = true;
            if(locationDetails){
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
            }else{
                console.log("Address is not available");
            }
        },3000)
    })
    return pr;

};

function deliverOrder(droplocation){
    console.log("Delivery boy on the way ......");

        setTimeout(()=>{
            console.log("Order Delivered succesfully");
        },5000);


};

placeOrder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>deliverOrder(droplocation))
.catch(error=>console.log(error));