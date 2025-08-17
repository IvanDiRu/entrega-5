const cartasMap: { [key: number]: string } = {
  1: '/1_as-copas.jpg',
  2: '/2_dos-copas.jpg',
  3: '/3_tres-copas.jpg',
  4: '/4_cuatro-copas.jpg',
  5: '/5_cinco-copas.jpg',
  6: '/6_seis-copas.jpg',
  7: '/7_siete-copas.jpg',
  10: '/10_sota-copas.jpg',
  11: '/11_caballo-copas.jpg',
  12: '/12_rey-copas.jpg'
};

const backImg = '/back.jpg';
let puntuacion = 0;
let juegoTerminado = false;

const spanPuntuacion = document.getElementById('puntuacion') as HTMLSpanElement;
const mensaje = document.getElementById('mensaje') as HTMLDivElement;
const btnPedir = document.getElementById('pedirCarta') as HTMLButtonElement;
const btnPlantarse = document.getElementById('plantarse') as HTMLButtonElement;
const btnNueva = document.getElementById('nuevaPartida') as HTMLButtonElement;
const btnSaber = document.getElementById('saberQuePasaria') as HTMLButtonElement;

const imgCarta = document.getElementById('carta') as HTMLImageElement;

function muestraPuntuacion() {
  spanPuntuacion.textContent = puntuacion.toString();
}

function dameCarta(): number {
  let carta = Math.floor(Math.random() * 10) + 1;
  if (carta > 7) carta += 2;
  return carta;
}

function valorCarta(carta: number): number {
  if (carta >= 10) return 0.5;
  return carta;
}

// Giro 3D
function mostrarCarta(carta: number) {
  imgCarta.style.transition = 'transform 0.3s';
  imgCarta.style.transform = 'rotateY(90deg)';

  setTimeout(() => {
    imgCarta.src = cartasMap[carta];
    imgCarta.style.transform = 'rotateY(0deg)';
  }, 300);
}

function pedirCarta() {
  if (juegoTerminado) return;
  const carta = dameCarta();
  mostrarCarta(carta);
  puntuacion += valorCarta(carta);
  muestraPuntuacion();

  if (puntuacion > 7.5) {
    mensaje.textContent = 'Game Over!';
    juegoTerminado = true;
    btnNueva.style.display = 'inline';
    btnPedir.disabled = true;
    btnPlantarse.disabled = true;
  }
}

function plantarse() {
  if (juegoTerminado) return;
  juegoTerminado = true;
  btnPedir.disabled = true;
  btnPlantarse.disabled = true;
  btnNueva.style.display = 'inline';
  btnSaber.style.display = 'inline';

  if (puntuacion < 4) mensaje.textContent = 'Has sido muy conservador';
  else if (puntuacion === 5) mensaje.textContent = 'Te ha entrado el canguelo eh?';
  else if (puntuacion === 6 || puntuacion === 7) mensaje.textContent = 'Casi casi...';
  else if (puntuacion === 7.5) mensaje.textContent = '¡Lo has clavado! ¡Enhorabuena!';
}

function nuevaPartida() {
  puntuacion = 0;
  juegoTerminado = false;
  imgCarta.src = backImg;
  mensaje.textContent = '';
  muestraPuntuacion();
  btnPedir.disabled = false;
  btnPlantarse.disabled = false;
  btnNueva.style.display = 'none';
  btnSaber.style.display = 'none';
}

function saberQuePasaria() {
  let simulacion = puntuacion;
  while (simulacion <= 7.5) {
    const carta = dameCarta();
    simulacion += valorCarta(carta);
    if (simulacion > 7.5) break;
  }
  mensaje.textContent += `\nSi siguieras, llegarías a ${simulacion}`;
}

btnPedir.addEventListener('click', pedirCarta);
btnPlantarse.addEventListener('click', plantarse);
btnNueva.addEventListener('click', nuevaPartida);
btnSaber.addEventListener('click', saberQuePasaria);

muestraPuntuacion();
