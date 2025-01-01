// let person1 = "harkirat";
// let person2 = "raman";
// let person3 = "kirat"; 

// let personArray = ["harkirat", "raman", "kirat"];

// console.log(personArray[0]);
// console.log(personArray[1]);
// console.log(personArray[2]);

// //find the biggest number in a array 
// const ages = [21, 22, 23, 24, 25, 26, 2];
// let bigest = 0;
// for(let i=0; i<ages.length; i++){
//     if(ages[i]> bigest){
//         bigest = ages[i];
//     }
// }
// console.log(bigest)


// // ================>>> Object <<<================
// let personArray = ["Harkirat", "raman", "shradha"];
// let genderArray = ["male", "male", "female"];
// for(let i=0; i<personArray.length; i++){
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
//     }
// }

//arrry of object

// const allUsers = [{
//     firstName : 'harkirat',
//     gender : "male"
// },
// {
//     firstName : "raman",
//     gender : "male"
// },
// {
//     firstName : "shradha", 
//     gender : "female"
// }];

// for(let i=0; i<allUsers.length; i++){
//     if(allUsers[i].gender == "female"){
//         console.log(allUsers[i].firstName);
//     }
// }


// function sum (num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
    
// }
// function displayResult(data){
//     console.log("Result of the sum is : " + data);
// }
// function displayResultPassive(data){
//     console.log("Sum's result is : " + data);
// }

// //You are only allowed to call one function after this 
// //How will you displayResult of a sum 

// sum(1,2, displayResult);
// //callbacks


// function calculateArithmetic(a, b, arithmeticFinalFunction) {
//         const value = arithmeticFinalFunction(a, b);
//         return value;
// }

// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a - b;
// }

// let result = calculateArithmetic(3,5,sub);
// console.log(result);


// 
// const user = {
//     name : "harkirat",
//     age : 21,
//     address: {
//         houseNumber : "11",
//         street: 1
//     }
// }
// console.log(user.address.houseNumber);
// console.log(user["address"]["houseNumber"]);


