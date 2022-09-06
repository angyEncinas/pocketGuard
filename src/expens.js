
const exp = document.querySelector("#expense");
const desc = document.querySelector("#descrip");
const form = document.querySelector("#expense-form");
const divhistorial = document.querySelector("#historial-div");
const divsuma = document.querySelector("#expense-div");
let expens = [];
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const amount= Number.parseInt(exp.value);
    const description= desc.value;
    expens.push([amount,description]);
    let txt = "";
    let sumae = 0;
    expens.forEach(myFunction);
    divhistorial.innerHTML = txt;
    expens.forEach(suma);
    divsuma.innerHTML = "Total expensas:" + sumae;
    function myFunction(value) {
        txt += value + "<br>"; 
    }
    function suma(value) {
        sumae += value[0]; 
    }
    
 });