// console.log("asd")

let para1=document.getElementById("para1");
 function btn(){
    para1.style.color="red";
 }

 let para2=document.getElementsByClassName("para2");
 function btn2(){
    para2[0].innerHTML="";
 }

// function press(){
//     document.getElementById("span").innerHTML="Key is pressed";
// }

// function notPress(){
//     document.getElementById("span").innerHTML="Key is not pressed";
// }
let a=0;
function change(val){
    a+=val;
    document.getElementById("span").innerHTML=a;
}