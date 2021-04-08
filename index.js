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
    var [a, b, c] = [str.split(" ")];
    var e = parseInt(a);
    var d = parseInt(c); 
    var res = e+d;
    console.log(e);
    console.log(b);
    // document.getElementById("result").value = res;
}