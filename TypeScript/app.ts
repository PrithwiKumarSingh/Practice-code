// Number

let a:number = 34;
let b:number = 32;

// String

let str:string = "Prithwi";

// boolean
let isExist:boolean = true;
isExist = false;

//bigint

// let bignum: bigint = 34242343453534534534534;


//null

let abc:null = null;
let bcd:undefined = undefined;
// bcd = "Mohan"


let num:number = 34;
let x =10;
let val = "Mohan";

let money:any;

money = 20;
money = "Rohit";

console.log(money.toUpperCase());


let val2:unknown;
val2 = "Rohit";
val2 = 32;

if(typeof val2 === 'string')
console.log(val2.toUpperCase());
if(typeof val2 === 'number')
console.log(val2.toFixed(2));


// Non Primitive

let arr:number[] = [2,3,5,6,7,9];
let arr2 = [4,3,5,6,7,3];

let arr3 = ["Roht","Prithwi", 33,]
arr3.push(34);

let arr4:(string | number |boolean)[] = ["King"];
arr4.push(true);
arr4.push(34);


// tuple 
let tuple:[string,number,number] = ["Mohan", 34, 20];

// Objects
//inline

let obj1:{name:string,age:number,gender:string} ={
    name : "Rohit",
    age : 23,
    gender : "Female"  
}


let person : {name:string,age:number,balance:number};

person = {
    name : "Prithwi",
    age : 21,
    balance : 348,
}


type customer = {
    name:string,
    age:number,
    id:string
}

let c1 : customer = {
    name:"Prithwi",
    age : 21,
    id : "ser"
}


interface admin {
    name : string,
    age : number,
    id : number
}

interface admin {
    position : string
}

let obj3: admin = {
    name: "Prithwi",
    age: 42,
    id : 3433,
    position : "prit"
}



// Interface vs Type
// Function
// Classes 

oobj1.addEventLisener("click",()=>{
    console.log("Prithwi SIngh")
})