
const amou = document.querySelector("#amount");
const desc = document.querySelector("#description");
const form = document.querySelector("#income-form");
const div = document.querySelector("#income-div");
const divhistorial = document.querySelector("#historial-div2");
let incomes = [];

form.addEventListener("submit", (event)=>{
   event.preventDefault();
   const amount= Number.parseInt(amou.value);
   const description= desc.value;
   incomes.push([amount,description]);
    let txt = "";
    incomes.forEach(myFunction);
    divhistorial.innerHTML = txt;

    function myFunction(value) {
        txt += value + "<br>"; 
    }
});