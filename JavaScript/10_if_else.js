// let age = 300;

// if(age >= 18){
//     console.log("You are eligible for vote");
// } else {
//     console.log("You are not eligible for vote");
// } 


// if(age < 18){
//     console.log("child");
// } else if(age < 45){
//     console.log("Young");
// } else if(age < 150){
//     console.log("Old Man");
// } else if (age >150){
//     console.log("Majak Mat kar bs*k");
// }

// Multiple condition : switch 

// console.log(new Date());
// console.log(new Date().getDay());

switch(new Date().getDay()){

    case 0: console.log("Sunday");
            break;
    case 1: console.log("Monday");
            break;
    case 2: console.log("Tuesday");
            break;
    case 3: console.log("Wednesday");
            break;
    case 4: console.log("Thursday");
            break;
    case 5: console.log("Friday");
            break;
    case 6: console.log("Saturday");
            break;
    default : console.log("Not Found");
}