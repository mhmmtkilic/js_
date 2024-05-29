/*
console.log("My name is Ali");
console.log("I like pizza");
window.alert("this is a alert message");
window.alert("i like pizza"); 


let age = 22;
let FirstName = "Ali";
document.getElementById("p1").textContent =`My name is ${FirstName}`;

let username ;  
document.getElementById("mySubmit").onclick = function(){
username = document.getElementById("myText").value;
console.log(username);
}

let age;
document.getElementById("mySubmit").onclick = function(){
    age=document.getElementById("myText").value;
    console.log(age);
}

// type conversions 
let x;
let y;
let z;
x= Number(x);
y=String(y);
z=Boolean(z);
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
*/
// constanst a veriale that cant be changed
const  pi=3.14;
let radius;
let circumference;
radius=window.prompt("Please enter radius value: ");
radius = Number(radius);
circumference = 2*pi*radius; // perimeter calculated
console.log(circumference);
document.getElementById("mytitle").textContent=circumference;//here we changed the h1 tag
