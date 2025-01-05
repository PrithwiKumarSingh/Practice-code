const fs = require("fs");

// // Sync...(making file with value)
// fs.writeFileSync("./a.txt", "Hey there. kaise hai aap log " );

// // Async .... (making file with value but  pass funciton )
// fs.writeFile("./a.txt", "prithwi singh", (err) => {});

// //sync
// const result = fs.readFileSync("./a.txt", "utf-8");
// console.log(result);

// //Async
// fs.readFile('./a.txt', 'utf-8', (err, result) => {
//     if(err){
//         console.log("Error : ",err);
//     }else{
//         console.log(result);
//     }
// });

fs.appendFileSync("./a.txt", `${Date.now()} Hey there\n`);