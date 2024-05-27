/*
console.log("My name is Ali");
console.log("I like pizza");
window.alert("this is a alert message");
window.alert("i like pizza"); 

*/
let age = 22;
let FirstName = "Ali";
document.getElementById("p1").textContent =`My name is ${FirstName}`;

let username ;  
document.getElementById("mySubmit").onclick = function(){
username = document.getElementById("myText").value;
console.log(username);
}