let secretNumber = Math.floor(Math.random() * 100) + 1;

function myFunction() {
    let theguess = Number(document.getElementById("numberguess").value);

    if (theguess > secretNumber) {
        document.getElementById("hol").textContent = "lower!";
    }

    if (theguess < secretNumber) {
        document.getElementById("hol").textContent = "higher!";
    }

    if (theguess === secretNumber) {
        document.getElementById("hol").textContent = "correct!(refresh page to play again)";
    }

    let button = document.getElementById("submit");

    button.style.backgroundColor = "lightblue";

    setTimeout(function() {
        button.style.backgroundColor = "";
    }, 500);
}