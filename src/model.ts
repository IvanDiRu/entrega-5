// Definición del modelo de datos

export type Carta = number;

export interface Partida {
  puntuacion: number;
  juegoTerminado: boolean;
  ultimaCarta?: Carta;
}

export const cartasMap: { [key: number]: string } = {
  1: '/1_as-copas.jpg',
  2: '/2_dos-copas.jpg',
  3: '/3_tres-copas.jpg',
  4: '/4_cuatro-copas.jpg',
  5: '/5_cinco-copas.jpg',
  6: '/6_seis-copas.jpg',
  7: '/7_siete-copas.jpg',
  10: '/10_sota-copas.jpg',
  11: '/11_caballo-copas.jpg',
  12: '/12_rey-copas.jpg',
};

export const backImg = '/back.jpg';

export function crearPartida(): Partida {
  return {
    puntuacion: 0,
    juegoTerminado: false,
    ultimaCarta: undefined,
  };
}
