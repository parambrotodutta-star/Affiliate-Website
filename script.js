const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function() {

let filter = search.value.toLowerCase();

cards.forEach(card => {

let text = card.textContent.toLowerCase();

if(text.includes(filter)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});
