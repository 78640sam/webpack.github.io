import "./index.css";

let div=document.createElement("div");
div.classList.add("main-div");
let p1=document.createElement("p");
p1.innerText=" ";
let p2=document.createElement("p");
p2.innerHTML="&#128589;"
p2.id="p-class1";


let btn2=document.createElement("button");
btn2.innerText="Attendance";
 let img=document.createElement("img");
img.src="https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?p=facebook";
let p3=document.createElement("p");
p3.innerText="User has not checked in";
p3.id="text"
let p4=document.createElement("p");
p4.innerHTML="&#128276;";
p4.id="p-class2";

let p5= document.createElement("iframe");
p5.src="https://masaischool.com/";
let p6=document.createElement("br");


// div1.append(img)
div.append(img,p1,p3,p4,btn2,p2);
document.getElementById("main").append(div,p6,p5);