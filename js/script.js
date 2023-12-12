const barras = document.querySelector(".barras");
const navegar = document.getElementById("navegar");

barras.addEventListener("click", () => {
  navegar.classList.toggle("mostrar");
});
