import { crearPartida } from "./model";
import { pedirCarta, plantarse, saberQuePasaria } from "./motor";
import { mostrarCarta, mostrarPuntuacion, mostrarMensaje, limpiarUI } from "./ui";

let partida = crearPartida();

const btnPedir = document.getElementById("pedirCarta") as HTMLButtonElement;
const btnPlantarse = document.getElementById("plantarse") as HTMLButtonElement;
const btnNueva = document.getElementById("nuevaPartida") as HTMLButtonElement;
const btnSaber = document.getElementById("saberQuePasaria") as HTMLButtonElement;

function actualizarUI() {
  mostrarCarta(partida.ultimaCarta);
  mostrarPuntuacion(partida.puntuacion);

  if (partida.puntuacion > 7.5) {
    mostrarMensaje("Game Over!");
    btnPedir.disabled = true;
    btnPlantarse.disabled = true;
    btnNueva.style.display = "inline";
  }
}

btnPedir.addEventListener("click", () => {
  pedirCarta(partida);
  actualizarUI();
});

btnPlantarse.addEventListener("click", () => {
  const texto = plantarse(partida);
  mostrarMensaje(texto);
  btnPedir.disabled = true;
  btnPlantarse.disabled = true;
  btnNueva.style.display = "inline";
  btnSaber.style.display = "inline";
});

btnNueva.addEventListener("click", () => {
  partida = crearPartida();
  limpiarUI();
  btnPedir.disabled = false;
  btnPlantarse.disabled = false;
  btnNueva.style.display = "none";
  btnSaber.style.display = "none";
});

btnSaber.addEventListener("click", () => {
  const texto = saberQuePasaria(partida);
  mostrarMensaje(`${(document.getElementById("mensaje") as HTMLDivElement).textContent}\n${texto}`);
});

// Inicializamos UI
limpiarUI();
