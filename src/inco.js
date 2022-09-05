
const amou = document.querySelector("#amount");
const desc = document.querySelector("#description");
const form = document.querySelector("#income-form");
const div = document.querySelector("#income-div");

form.addEventListener("submit", (event)=>{
   event.preventDefault();
   const amount= Number.parseInt(amou.value);
   const description= desc.value;
   div.innerHTML = "<p>"+` Added income: ${amount} ` + `Description: ${description}` +"<p/>"
});