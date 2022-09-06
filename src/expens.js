
const exp = document.querySelector("#expense");
const desc = document.querySelector("#descrip");
const form = document.querySelector("#expense-form");
const div = document.querySelector("#expense-div");
const divhistorial = document.querySelector("#historial-div");
let expens = [];
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const amount= Number.parseInt(exp.value);
    const description= desc.value;
    expens.push([amount,description]);
    div.innerHTML = "<p>"+` Added Expense: ${expens[0]} `+ "<p/>"
    const numbers = [45, 4, 9, 16, 25];

    let txt = "";
    expens.forEach(myFunction);
    divhistorial.innerHTML = txt;

    function myFunction(value) {
        txt += value + "<br>"; 
    }
     
 });