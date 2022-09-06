
const exp = document.querySelector("#expense");
const desc = document.querySelector("#descrip");
const form = document.querySelector("#expense-form");
const div = document.querySelector("#expense-div");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const amount= Number.parseInt(exp.value);
    const description= desc.value;
    div.innerHTML = "<p>"+` Added Expense: ${amount} `+ `Description: ${description}` +"<p/>"
 });