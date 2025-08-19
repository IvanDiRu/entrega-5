import { Carta, Partida } from "./model";

export function dameCarta(): Carta {
  let carta = Math.floor(Math.random() * 10) + 1;
  if (carta > 7) carta += 2;
  return carta;
}

export function valorCarta(carta: Carta): number {
  return carta >= 10 ? 0.5 : carta;
}

export function pedirCarta(partida: Partida): void {
  if (partida.juegoTerminado) return;

  const carta = dameCarta();
  partida.ultimaCarta = carta;
  partida.puntuacion += valorCarta(carta);

  if (partida.puntuacion > 7.5) {
    partida.juegoTerminado = true;
  }
}

export function plantarse(partida: Partida): string {
  partida.juegoTerminado = true;

  if (partida.puntuacion < 4) return 'Has sido muy conservador';
  if (partida.puntuacion === 5) return 'Te ha entrado el canguelo eh?';
  if (partida.puntuacion === 6 || partida.puntuacion === 7) return 'Casi casi...';
  if (partida.puntuacion === 7.5) return '¡Lo has clavado! ¡Enhorabuena!';

  return '';
}

export function saberQuePasaria(partida: Partida): string {
  let simulacion = partida.puntuacion;
  while (simulacion <= 7.5) {
    const carta = dameCarta();
    simulacion += valorCarta(carta);
    if (simulacion > 7.5) break;
  }
  return `Si siguieras, llegarías a ${simulacion}`;
}
