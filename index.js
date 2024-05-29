/*
console.log("My name is Ali");
console.log("I like pizza");
window.alert("this is a alert message");
window.alert("i like pizza"); 
----------------------------------------------------------------

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
----------------------------------------------------------------

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
----------------------------------------------------------------

// constanst a veriale that cant be changed
const  pi=3.14;
let radius;
let circumference;
radius=window.prompt("Please enter radius value: ");
radius = Number(radius);
circumference = 2*pi*radius; // perimeter calculated
console.log(circumference);
document.getElementById("mytitle").textContent=circumference;//here we changed the h1 tag
----------------------------------------------------------------

// Math =built in Math that provides a 
// collection of properties and methods 
console.log(Math.PI);
let x =3.21;
let y =2;
let z;

//z=Math.round(x); ---> 3
//z=Math.floor(x);---> 3
//z=Math.ceil(x);---> 4
//z=Math.trunc(x); ondalık kısmı ortadan kaldır.
//z=Math.pow(x,y);
//z=Math.sqrt(x);
//z=Math.log(x);
//z=Math.sin(x);
//z=Math.abs(x); mutlak deger
//z=Math.sign(x); pozitif or nagative 
let max=Math.max(x,y,z);
let min=Math.max(x,y,z);

console.log(max);
---------------------------------- ----------------------------

//RANDOM NUMBER GENERATOR

*/
let randomNum=Math.random();
let randomNumber=Math.floor(Math.random()*6);
console.log(randomNumber);
console.log(randomNum);