const button = document.getElementById("button");
const scoreElement = document.getElementById("score_element");

if(typeof sessionStorage === "undefined"){
    console.log("No tiene nada añadido al carrito");
}

if(sessionStorage.getItem("score")){
    scoreElement.innerHTML = sessionStorage.getItem("score");
}else {
    sessionStorage.setItem("score", "0");
}

button.onclick = () => {
    const currentScore = sessionStorage.getItem("score");
    sessionStorage.setItem("score", parseInt(currentScore) + 1);
    scoreElement.innerHTML = sessionStorage.getItem("score");
}