import { cartasMap, backImg } from "./model";

const imgCarta = document.getElementById("carta") as HTMLImageElement;
const spanPuntuacion = document.getElementById("puntuacion") as HTMLSpanElement;
const mensaje = document.getElementById("mensaje") as HTMLDivElement;

export function mostrarCarta(carta?: number) {
  imgCarta.src = carta ? cartasMap[carta] : backImg;
}

export function mostrarPuntuacion(puntos: number) {
  spanPuntuacion.textContent = puntos.toString();
}

export function mostrarMensaje(texto: string) {
  mensaje.textContent = texto;
}

export function limpiarUI() {
  mostrarCarta();
  mostrarPuntuacion(0);
  mostrarMensaje("");
}
