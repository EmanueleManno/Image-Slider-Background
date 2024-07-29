//Recupero i due bottoni
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

//Bottone per andare al successivo
next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

//Bottone per andare al precedente
prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});
