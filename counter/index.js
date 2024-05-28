let num=0;
document.getElementById("increase").onclick=function() {
    num++;
    document.getElementById("myp").textContent=num;
}
document.getElementById("reset").onclick=function() {
    num=0;;
    document.getElementById("myp").textContent=num;

}
document.getElementById("decrease").onclick=function() {
    num--;
    document.getElementById("myp").textContent=num;

}