let num=0;
document.getElementById("increase").onclick=function() {
    num++;
    document.getElementById("countArea").textContent=num;
}
document.getElementById("reset").onclick=function() {
    num=0;;
    document.getElementById("countArea").textContent=num;

}
document.getElementById("decrease").onclick=function() {
    num--;
    document.getElementById("countArea").textContent=num;

}