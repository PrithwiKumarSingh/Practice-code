const element1 = React.createElement("h1",{id:"first", className:"first-class", style:{fontSize:"30px", backgroundColor:"red", color:"white"}},"Hello Coder Army")
const element2 = React.createElement("h1",{id:"second", className:"second-class", style:{fontSize:"20px", backgroundColor:"blue", color:"white"}},"To Kaise Hai Aaap Log")

// ReactDom.render(element,document.getElementById('root'))
// element : 50 card pade hue hai 

const div1 = React.createElement('div',{},[element1,element2])
const Reactroot = ReactDOM.createRoot(document.getElementById('root'))
//  React root container: is 
Reactroot.render(div1);