const text = document.getElementById("text");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let number = 0;

text.textContent = number;

increase.onclick = function(){
    number++;
    text.textContent = number;
}
decrease.onclick = function(){
    number--;
    text.textContent = number;
}
reset.onclick = function(){
    number = 0;
    text.textContent = 0;
}