var str = "";
function myFunction(n){
    var str1 = n;
    str = str.concat(str1); 
    document.getElementById("result").value = str;
} 
function clr(){
    document.getElementById("result").value = "";
    str = "";
}
function getAns(){
    var ans = eval(str);
    document.getElementById("result").value = ans;
}
function del(){
    str = str.slice(0, str.length - 1);
    document.getElementById("result").value = str;
}
