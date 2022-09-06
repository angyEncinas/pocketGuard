
const exp = document.querySelector("#expense");
const form = document.querySelector("#expense-form");
const div = document.querySelector("#expense-div");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const amount= Number.parseInt(exp.value);
    div.innerHTML = "<p>"+` Added Expense: ${amount} ` +"<p/>"
 });