const cart = ["Pizza", "coke", "sandwich"];

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


async function greet() {
    const order = await placeOrder(cart);
    const foodDetails = await preparingOrder(order);
    const droplocation = await pickupOrder(foodDetails);
    deliverOrder(droplocation);
}

greet();


// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));

const p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Hello Everyone");
    }, 5000)
})

// p1.then(data=>console.log(data));

async function greet() {
    const data = await p1;
    console.log(data);
}

greet();