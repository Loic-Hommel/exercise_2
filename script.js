console.info("Everything looks fine ✅.");
console.log("Open this script.js file and write your code...");

const name = document.querySelector('.name');
const button = document.querySelector("button");

button.addEventListener("click", changeColor);
    
function changeColor() {
        name.style.color = "red";
    }
