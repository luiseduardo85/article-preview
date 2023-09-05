var shareButton  = document.querySelector(".share-btn");
var toggle = document.querySelector(".toggle");

shareButton.addEventListener("click", toggleDisplay);

function toggleDisplay (){
    toggle.classList.toggle("hidden");
}