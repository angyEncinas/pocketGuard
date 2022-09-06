
const amou = document.querySelector("#amount");
const desc = document.querySelector("#description");
const form = document.querySelector("#income-form");
const divsuma = document.querySelector("#income-div");
const divhistorial = document.querySelector("#historial-div2");
let incomes = [];

form.addEventListener("submit", (event)=>{
   event.preventDefault();
   const amount= Number.parseInt(amou.value);
   const description= desc.value;
   incomes.push([amount,description]);
    let txt = "";
    let sumai = 0;
    incomes.forEach(myFunction);
    divhistorial.innerHTML = txt;
    incomes.forEach(suma);
    divsuma.innerHTML = "Total Incomes:" + sumai;
    function myFunction(value) {
        txt += value + "<br>"; 
    }
    function suma(value) {
      sumai += value[0]; 
  }
});