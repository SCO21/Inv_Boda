const fechaBoda = new Date('2026-01-17T00:00:00').getTime(); 

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaBoda - ahora;

  if (diferencia <= 0) {
    document.getElementById("dias").textContent = "0";
    document.getElementById("horas").textContent = "00";
    document.getElementById("minutos").textContent = "00";
    document.getElementById("segundos").textContent = "00";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
  document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0');
}

// Actualizar cada segundo
setInterval(actualizarContador, 1000);

// Llamada inicial
actualizarContador();
