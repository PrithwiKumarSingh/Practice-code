// const d = new Date();

// console.log(d)
// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toISOString());

// console.log(d.getDate()); //29
// console.log(d.getDay());  //2
// console.log(d.getFullYear()); //2025
// console.log(d.getHours()); //8
// console.log(d.getMilliseconds()); 
// console.log(d.getMonth()); // 3
// console.log(d.getMinutes()); //16
// console.log(d.getSeconds());
// console.log(d.getTime());



// const d = new Date("2022-10-20");
// console.log(d);
// // year / month / Date / Hour / Minute / second / millisecond
// const date = new Date(2025,4,29, 10, 12,30,343);
// console.log(date.toString());

const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");

const date = date2 - date1;
const days = Math.floor(date/(1000*60*60*24));
const hours = Math.floor(date/(1000*60*60)%24);
const minute = Math.floor(date/(1000*60)%60);
const second = Math.floor(date/(1000)%60);

console.log(`Olympic CountDownTime : Days:${days} Hours:${hours} Minutes:${minute} second:${second}`);
