const exp = document.querySelector("#expense");
const desce = document.querySelector("#descrip");
const forme = document.querySelector("#expense-form");
const divhistoriale = document.querySelector("#historial-div");
const divsumae = document.querySelector("#expense-div");
const amou = document.querySelector("#amount");
const desci = document.querySelector("#description");
const formi = document.querySelector("#income-form");
const divsumai = document.querySelector("#income-div");
const divhistoriali = document.querySelector("#historial-div2");
const divbalance = document.querySelector("#balance-div");
let expens = [];
let incomes = [];
let sumae = 0;
let sumai = 0;
let sumab = 0;
forme.addEventListener("submit", (event)=>{
    event.preventDefault();
    const amount= Number.parseInt(exp.value);
    const description= desce.value;
    expens.push([amount,description]);
    let txt = "";
    
    expens.forEach(myFunction);
    divhistoriale.innerHTML = txt;
    expens.forEach(suma);
    divsumae.innerHTML = "Total expenses:" + sumae;
    divbalance.innerHTML = "Total:" + (sumai-sumae);
    function myFunction(value) {
        txt += value + "<br>"; 
    }
    function suma(value) {
        sumae += value[0]; 
    }
    function sumabalance(value) {
        sumab = sumai-sumae; 
    }
    
 });
 formi.addEventListener("submit", (event)=>{
    event.preventDefault();
    const amount= Number.parseInt(amou.value);
    const description= desci.value;
    incomes.push([amount,description]);
     let txt = "";
     
     incomes.forEach(myFunction);
     divhistoriali.innerHTML = txt;
     incomes.forEach(suma);
     divsumai.innerHTML = "Total Incomes:" + sumai;
     divbalance.innerHTML = "Total:" + (sumai-sumae);
     function myFunction(value) {
         txt += value + "<br>"; 
     }
     function suma(value) {
       sumai += value[0]; 
    }
    function sumabalance(value) {
        sumab = sumai-sumae;
    }
 });