function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const inicio = new Date("2024-12-06T00:00:00"); // ALTERE PARA DATA REAL

function atualizarTempo() {
  const agora = new Date();
  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();
  let horas = agora.getHours() - inicio.getHours();

  if (horas < 0) {
    horas += 24;
    dias--;
  }

  if (dias < 0) {
    const ultimoMes = new Date(
      agora.getFullYear(),
      agora.getMonth(),
      0
    ).getDate();
    dias += ultimoMes;
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anos--;
  }

  document.getElementById(
    "tempo"
  ).innerHTML = `${anos} anos, ${meses} meses, ${dias} dias e ${horas} horas <br> vivendo o melhor da vida com você ❤️`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();
