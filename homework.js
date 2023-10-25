
// bai1
let btnAction1=document.getElementById("btn-action-1");
btnAction1.addEventListener("click",()=>{
    let length= parseInt(document.getElementById("length").value);
    let width= parseInt(document.getElementById("width").value);

    if(length===width){
        alert("đây là hình vuông");
    }else{
        alert("đây là hình chữ nhật")
    }
})
// bai2
let btnAction2=document.getElementById("btn-action-2");

btnAction2.addEventListener("click",()=>{
    let numberA=parseFloat(document.getElementById("number-a").value);
    let numberB=parseFloat(document.getElementById("number-b").value);

    if(numberA>=numberB){
        alert(`số lớn nhất là ${numberA}`)
    }else{
        alert(`số lớn nhất là ${numberB}`)
    }
})
// bai3
document.getElementById("btn-action-3").addEventListener("click",()=>{
    if(n>=0){
        alert(`giá trị tuyệt đối của ${n} là ${n}`);
    }else{
        alert(`giá trị tuyệt đối của ${n} là ${-n}`);
    }
})
// bai4
 let btnAction4=document.getElementById("btn-action-4");
 btnAction4.addEventListener("click",()=>{
    let day=parseInt(document.getElementById("day").value);
    if (day==2)alert("Monday");
    else if(day==3)alert("Tuesday");
    else if(day==4)alert("Wednesday");
    else if(day==5)alert("Thursday");
    else if(day==6)alert("Friday");
    else if(day==7)alert("Saturday");
    else alert("Sunday");
 });
//  bai5
let btnAction5=document.getElementById("btn-action-5");
btnAction5.addEventListener("click",()=>{
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);
    let n3=parseInt(document.getElementById("n3").value);

    if(n1>=n2&&n1>=n3){
        alert(`số lớn nhất là ${n1}`);
    }else if(n2>=n1&&n2>=n3){
        alert(`số lớn nhất là ${n2}`);
    }else {
        alert(`số lớn nhất là ${n3}`);
    }
})
