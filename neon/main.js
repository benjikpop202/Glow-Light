//LETRAS

let letraGM = document.getElementById("G");
let letraL = document.getElementById("l");
let letraO = document.getElementById("o");
let letraW = document.getElementById("w");
let letraI = document.getElementById("i");
let letraN = document.getElementById("n");
let letraG = document.getElementById("g");

//BOTONES

//encender
let on1 = document.getElementById("on1");
let on2 = document.getElementById("on2");
let on3 = document.getElementById("on3");
let on4 = document.getElementById("on4");
let on5 = document.getElementById("on5");
let on6 = document.getElementById("on6");
let on7 = document.getElementById("on7");

//apagar
let off1 = document.getElementById("off1");
let off2 = document.getElementById("off2");
let off3 = document.getElementById("off3");
let off4 = document.getElementById("off4");
let off5 = document.getElementById("off5");
let off6 = document.getElementById("off6");
let off7 = document.getElementById("off7");

//FUNCIONES ENCENDER 
function OFFColor1(){
    letraGM.style.color = "#ff0000";
    letraGM.style.textShadow = "0px 0px 20px #ff0000";
    on1.style.color = "#000"
    on1.style.background = "#fff"
    off1.style.background = "#000"
    off1.style.color = "#fff"
    
}

function OFFColor2(){
    letraL.style.color = "#ff8000";
    letraL.style.textShadow = "0px 0px 20px #ff8000"
    on2.style.color = "#000"
    on2.style.background = "#fff"
    off2.style.background = "#000"
    off2.style.color = "#fff"
    
}

function OFFColor3(){
    letraO.style.color = "#ff0";
    letraO.style.textShadow = "0px 0px 20px #ff0"
    on3.style.color = "#000"
    on3.style.background = "#fff"
    off3.style.background = "#000"
    off3.style.color = "#fff"
    
}

function OFFColor4(){
    letraW.style.color = "#008f39";
    letraW.style.textShadow = "0px 0px 20px #008f39"
    on4.style.color = "#000"
    on4.style.background = "#fff"
    off4.style.background = "#000"
    off4.style.color = "#fff"
    
}

function OFFColor5(){
    letraI.style.color = "#0000FF";
    letraI.style.textShadow = "0px 0px 20px #0000FF"
    on5.style.color = "#000"
    on5.style.background = "#fff"
    off5.style.background = "#000"
    off5.style.color = "#fff"
    
}

function OFFColor6(){
    letraN.style.color = "#78288c";
    letraN.style.textShadow = "0px 0px 20px #78288c"
    on6.style.color = "#000"
    on6.style.background = "#fff"
    off6.style.background = "#000"
    off6.style.color = "#fff"
}

function OFFColor7(){
    letraG.style.color = "#4B0082";
    letraG.style.textShadow = "0px 0px 20px #4B0082"
    on7.style.color = "#000"
    on7.style.background = "#fff"
    off7.style.background = "#000"
    off7.style.color = "#fff"
    
}

//FUNCIONES APAGAR
function ONColor1(){
    letraGM.style.color = "#000"
    letraGM.style.textShadow = "none"
    off1.style.color = "#000"
    off1.style.background = "#fff"
    on1.style.background = "#000"
    on1.style.color = "#fff"
}

function ONColor2(){
    letraL.style.color = "#000"
    letraL.style.textShadow = "none"
    off2.style.color = "#000"
    off2.style.background = "#fff"
    on2.style.background = "#000"
    on2.style.color = "#fff"
}

function ONColor3(){
    letraO.style.color = "#000"
    letraO.style.textShadow = "none"
    off3.style.color = "#000"
    off3.style.background = "#fff"
    on3.style.background = "#000"
    on3.style.color = "#fff"
}

function ONColor4(){
    letraW.style.color = "#000"
    letraW.style.textShadow = "none"
    off4.style.color = "#000"
    off4.style.background = "#fff"
    on4.style.background = "#000"
    on4.style.color = "#fff"
}

function ONColor5(){
    letraI.style.color = "#000"
    letraI.style.textShadow = "none"
    off5.style.color = "#000"
    off5.style.background = "#fff"
    on5.style.background = "#000"
    on5.style.color = "#fff"
}

function ONColor6(){
    letraN.style.color = "#000"
    letraN.style.textShadow = "none"
    off6.style.color = "#000"
    off6.style.background = "#fff"
    on6.style.background = "#000"
    on6.style.color = "#fff"
}

function ONColor7(){
    letraG.style.color = "#000"
    letraG.style.textShadow = "none"
    off7.style.color = "#000"
    off7.style.background = "#fff"
    on7.style.background = "#000"
    on7.style.color = "#fff"
}


function main(){
//encender
on1.addEventListener("click",OFFColor1);
on2.addEventListener("click",OFFColor2);
on3.addEventListener("click",OFFColor3);
on4.addEventListener("click",OFFColor4);
on5.addEventListener("click",OFFColor5);
on6.addEventListener("click",OFFColor6);
on7.addEventListener("click",OFFColor7);

//apagar
off1.addEventListener("click", ONColor1);
off2.addEventListener("click", ONColor2);
off3.addEventListener("click", ONColor3);
off4.addEventListener("click", ONColor4);
off5.addEventListener("click", ONColor5);
off6.addEventListener("click", ONColor6);
off7.addEventListener("click", ONColor7);

}


main()









