
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

// const element = document.createAttribute("id");
// element.value = "first";

// // Accessing First list 
// // const curr_list = document.querySelector("li");
// // curr_list.setAttributeNode(element);

// // Accessing Second list 
// const parent = document.querySelector("#root");
// parent.children[1].setAttributeNode(element);


/******************** Access attribute of a element ********************* */

// const element = document.getElementById("root");

// console.log(element.getAttribute("class"));

// element.setAttribute("custom", "20");
// element.setAttribute("class", "rohit");


/* ******************* Add nodes to the DOM ********************* */
// const parent = document.getElementById("root");
// const element = document.createElement("li");
// element.innerHTML = "TS";

// // //first in list 
// // parent.prepend(element);

// // //last in list 
// // parent.append(element);

// const child2 = parent.children[1];
// parent.insertBefore(element, child2);

// parent.replaceChild(element,child2);




// const parent = document.getElementById("root");
// // parent.innerHTML += "<li>TS</li>";

// const element = document.createElement("div");
// element.innerHTML = "Hello Coder Army";

// parent.insertAdjacentElement("beforebegin", element);
// parent.insertAdjacentElement("afterbegin", element);
// parent.insertAdjacentElement("afterend", element);
// parent.insertAdjacentElement("beforeend", element);


// Delete node or element 

const element = document.querySelector("li");
element.remove();

