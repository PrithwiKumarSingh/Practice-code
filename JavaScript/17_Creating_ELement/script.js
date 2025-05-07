
/* *******************CreateElement********************* */

// function attach(content){
// let element = document.createElement("li");
// element.innerHTML = content;

// let parent = document.querySelector("#root")
// // parent.appendChild(element);
// // parent.append(element,"Hello ", "Har Har Mahadev ");

// let element2 = document.createElement("li");
// element2.innerHTML = content+" V2.0";
// parent.append(element,element2);


// }

// attach("TS");
// attach("React");


/* *******************  TextNode  ********************* */

// let element = document.createTextNode("Hello Coder Army");
// const parent = document.querySelector('#root');
// parent.append(element);

/* ******************* Attribute Node ********************* */

const element = document.createAttribute("id");
element.value = "first";

// Accessing First list 
// const curr_list = document.querySelector("li");
// curr_list.setAttributeNode(element);

// Accessing Second list 
const parent = document.querySelector("#root");
parent.children[1].setAttributeNode(element);