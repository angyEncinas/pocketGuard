
const amou = document.querySelector("#amount");
const form = document.querySelector("#income-form");
const div = document.querySelector("#income-div");

form.addEventListener("submit", (event)=>{
   event.preventDefault();
   const amount= Number.parseInt(amou.value);
   div.innerHTML = "<p>"+ amount +"<p/>"
});