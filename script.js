function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const inicio = new Date("2024-12-06"); // ALTERA PARA DATA REAL
setInterval(() => {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("tempo").innerText =
    dias + " dias vivendo o melhor da vida com você ❤️";
}, 1000);

function revelar() {
  document.getElementById("texto").style.display = "block";
}
