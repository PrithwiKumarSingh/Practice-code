// // Create element through JS

// const { createElement } = require("react");

// const header1 = document.createElement('h1');
// header1.innerText = "Hello Coder Army";
// header1.style.fontSize = "300px";
// header1.style.backgroundColor = 'blue';
// header1.style.color = 'white';


// const header2 = document.createElement('h1');
// header2.innerText = "Prithwi Maurya";
// header2.style.fontSize = "300px";
// header2.style.backgroundColor = 'red';
// header2.style.color = 'white';




const ReactDOM = {
    createElement: function(tag,styles,children){
        
        const element = document.createElement(tag);
        if(typeof children === 'object'){
            for(let val of children){
                element.append(val);
            }
        }
        else
        element.innerText = children;
        for(let key in styles){
            element.style[key] = styles[key];
        }

        return element;
    },
    render: function(element,root){
        root.append(element);
    }
}




const header1 = ReactDOM.createElement("h1",{fontSize:"30px", backgroundColor:"red", color:"white"},"Hello Coder Army");
const header2 = ReactDOM.createElement("h1",{fontSize:"25px", backgroundColor:"blue", color:"white"},"Prithwi");


const li1 = ReactDOM.createElement("li",{},"HTML");
const li2 = ReactDOM.createElement("li",{},"CSS");
const li3 = ReactDOM.createElement("li",{},"JS");

const ul = ReactDOM.createElement("ul",{fontSize:"25px", backgroundColor:"blue", color:"white"},[li1,li2,li3])

ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(ul,document.getElementById('root'));





// const root = document.getElementById('root');
// root.appendChild(header1);
// root.appendChild(header2);

