// Camion de color con click en el titulo
let titulo = document.getElementById("tit");
let boton = document.getElementById("bot");
boton.addEventListener("click", function() {
    titulo.style.color = "#e52e9a";
});

// Cambio de texto e imagen con click en comentario
let coment = document.getElementById("subtit");
let imagen = document.getElementById("yvonne");
coment.addEventListener("click", function() {
    coment.style.color = "red";
    coment.textContent = "NO PUDE";
    imagen.src = "yvonne2.jpg";
});

// Cambio de modo oscuro con click en botón
// pendiente
let mode = document.getElementById("modo");
mode.addEventListener("click", () => {
    switchModeButton(mode);
});

// Contador de likes
let contador = document.getElementById("cnter");
let likes = 0;
contador.addEventListener("click", () => {
    likes++;
    contador.textContent = 'Likes: ' + likes;
});

// Funciones
function switchModeButton(buttom) {
    if (buttom.textContent === "Dark mode") {
        buttom.textContent = "Light mode";
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#ffffff";
    } else {
        buttom.textContent = "Dark mode";
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
    }
}