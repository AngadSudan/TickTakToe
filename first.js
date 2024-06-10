let button= document.querySelector(".play");
let button1= document.querySelector("#button1");
let button2= document.querySelector("#button2");
let button3= document.querySelector("#button3");
let button4= document.querySelector("#button4");
let button5= document.querySelector("#button5");
let button6= document.querySelector("#button6");
let button7= document.querySelector("#button7");
let button8= document.querySelector("#button8");
let button9= document.querySelector("#button9");
let replay= document.querySelector(".replay");
let turn=1;
button1.onclick=()=>{
    if(turn%2!==0){
        button1.innerText="X";
        button1.style.fontSize="32px";
        button1.style.color="yellow";
    }
    else{
        button1.innerText="O";
        button1.style.fontSize="32px";
        button1.style.color="yellow";
    }
    turn<=9?turn++:pass;
}
button2.onclick=()=>{
    if(turn%2!==0){
        button2.innerText="X";
        button2.style.fontSize="32px";
        button2.style.color="yellow";
    }
    else{
        button2.innerText="O";
        button2.style.fontSize="32px";
        button2.style.color="yellow";
    }
    turn<=9?turn++:pass;
}
button3.onclick=()=>{
    if(turn%2!==0){
        button3.innerText="X";
        button3.style.fontSize="32px";
        button3.style.color="yellow";
    }
    else{
        button3.innerText="O";
        button3.style.fontSize="32px";
        button3.style.color="yellow";
    }
    turn<=9?turn++:pass;
}
button4.onclick=()=>{
    if(turn%2!==0){
        button4.innerText="X";
        button4.style.fontSize="32px";
        button4.style.color="yellow";
    }
    else{
        button4.innerText="O";
        button4.style.fontSize="32px";
        button4.style.color="yellow";
    }
    turn<=9?turn++:pass;
}
button5.onclick=()=>{
    if(turn%2!==0){
        button5.innerText="X";
        button5.style.fontSize="32px";
        button5.style.color="yellow";
    }
    else{
        button5.innerText="O";
        button5.style.fontSize="32px";
        button5.style.color="yellow";
    }
    turn<=9?turn++:pass;
}
button6.onclick=()=>{
    if(turn%2!==0){
        button6.innerText="X";
        button6.style.fontSize="32px";
        button6.style.color="yellow";
    }
    else{
        button6.innerText="O";
        button6.style.fontSize="32px";
        button6.style.color="yellow";
    }
    turn<=9?turn++:pass;
}
button7.onclick=()=>{
    if(turn%2!==0){
        button7.innerText="X";
        button7.style.fontSize="32px";
        button7.style.color="yellow";
    }
    else{
        button7.innerText="O";
        button7.style.fontSize="32px";
        button7.style.color="yellow";
    }
    turn<=9?turn++:pass;
}
button8.onclick=()=>{
    if(turn%2!==0){
        button8.innerText="X";
        button8.style.fontSize="32px";
        button8.style.color="yellow";
    }
    else{
        button8.innerText="O";
        button8.style.fontSize="32px";
        button8.style.color="yellow";
    }
    turn<=9?turn++:pass;
}
button9.onclick=()=>{
    if(turn%2!==0){
        button9.innerText="X";
        button9.style.fontSize="32px";
        button9.style.color="yellow";
    }
    else{
        button9.innerText="O";
        button9.style.fontSize="32px";
        button9.style.color="yellow";
    }
    turn<=9?turn++:pass;
}
let cond1= button1.innerText=== button2.innerText && button1.innerText===button3.innerText;
let cond2= button4.innerText===button5.innerText && button4.innerText===button6.innerText;
let cond3= button7.innerText===button8.innerText&& button8.innerText===button9.innerText;
let cond4= button3.innerText===button5.innerText && button3.innerText===button7.innerText;
let cond5= button1.innerText===button4.innerText && button1.innerText===button7.innerText;
let cond6= button2.innerText===button5.innerText && button2.innerText===button8.innerText;
let cond7= button3.innerText===button6.innerText && button3.innerText===button9.innerText;
let cond8= button1.innerText===button5.innerText && button1.innerText===button9.innerText;
replay.onclick=()=>{
    if(cond1||cond2||cond3||cond4||cond5||cond6||cond7 || cond8){
        if(turn%2!==0){
            alert("O won");
        }
        if(turn%2===0){
            alert("X won");
        }
        else{
            alert("draw");
        }
    }
    button1.innerText="";   
    button2.innerText="";  
    button3.innerText="";  
    button4.innerText="";  
    button5.innerText="";  
    button6.innerText="";  
    button7.innerText="";  
    button8.innerText="";  
    button9.innerText="";
    turn=1;  
}