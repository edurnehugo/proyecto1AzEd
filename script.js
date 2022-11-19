"use strict";
let rgbRandom = document.querySelector("#rgbRandom");

let color0 = document.querySelector("#color0");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let color3 = document.querySelector("#color3");
let color4 = document.querySelector("#color4");
let color5 = document.querySelector("#color5");

let rgb;

const fraseFinalGanar = [
  `"No más entrenamiento, requieres tú. Lo que necesitas, sabes ya."`,
  `"El maestro ha fallado más veces de las que el principiante lo ha intentado."`,
  `"¿Un aprendiz? Y ahora un Maestro eres tú, ¿verdad? De esta decisión, honesto debes ser."`,
  `"Que la fuerza te acompañe."`,
  `"Listo está, para enseñar a un aprendiz. Dejar ir a su alumno, un mayor reto será."`,
  `"Ya conoces tú todo lo que necesitas saber."`,
];

const fraseFinalPerder = [
  `"Tan seguro estabas tú. Regresa y más cerca debes mirar."`,
  `"Entrénate para dejar ir todo lo que temes perder."`,
  `"Un misterio infinito la Fuerza es. Mucho por aprender aún queda."`,
  `"Perdido, sí, pero ¿qué es lo que está perdido? La cuestión, esa es."`,
  `"Reconocerás lo bueno de lo malo cuando estés en paz y tranquilo."`,
  `“Cuando mires al lado oscuro, cuidado debes tener… ya que el lado Oscuro te mira también.”`,
  `“En toda forma de vida la fuerza reside. Usarla pueden.”`,
  `"El mejor profesor, el fracaso es."`,
];

const fraseAciertos = [
  `"Recuerda siempre, tu enfoque determina tu realidad."`,
  `"Si temeroso no estás, ya lo estarás."`,
  `"Las armas no ganan batallas. Tu mente, poderosa ella es."`,
  `"Te ha traído aquí, la galaxia te ha conducido. Tu camino es claro."`,
  `"Recuerda, el futuro siempre está en movimiento y muchos futuros posibles pueden suceder."`,
];
const fraseFallos = [
  `"Entrénate para dejar ir todo lo que temes perder."`,
  `"Lo aprendido debes desaprender."`,
  `"Imposible nada es. Difícil, muchas cosas son."`,
  `"Difícil de ver es. Siempre en movimiento el futuro está."`,
  `"No, no es diferente, solo es diferente en tu mente."`,
  `"El lado oscuro lo nubla todo. Imposible ver el futuro es."`,
  `"Si creer no puedes, es por eso que fallas."`,
  `"Paciencia debes tener, mi joven padawan."`,
];

//Berto nos ha proporcionado esta función para poder usar el contraste de color para el texto de la muestra.
//Tambien nos ha ayudado en mejorar el codigo que habiamos realizado.

function getContrastColor({ r, g, b }) {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  if (Math.abs(brightness - 255) > brightness) {
    return `var(--color-secundario)`;
  } else {
    return `var(--color-principal)`;
  }
}

function obToRGB({ r, g, b }) {
  return `rgb(${r},${g}, ${b})`;
}

function generateRandom(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;

  return rand;
}

function generadorColores() {
  const coloresAleatorios = [];

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let rNum = 0;
  let gNum = 0;
  let bNum = 0;

  for (let i = 0; i < 6; i++) {
    coloresAleatorios.push({ r: r + rNum, g: g + gNum, b: b + bNum });

    rNum += generateRandom(10, 20);
    gNum += generateRandom(10, 20);
    bNum += generateRandom(10, 20);
  }

  console.log(coloresAleatorios);

  color0.style.backgroundColor = obToRGB(coloresAleatorios[0]);
  color1.style.backgroundColor = obToRGB(coloresAleatorios[1]);
  color2.style.backgroundColor = obToRGB(coloresAleatorios[2]);
  color3.style.backgroundColor = obToRGB(coloresAleatorios[3]);
  color4.style.backgroundColor = obToRGB(coloresAleatorios[4]);
  color5.style.backgroundColor = obToRGB(coloresAleatorios[5]);

  const target =
    coloresAleatorios[Math.floor(Math.random() * coloresAleatorios.length)];

  rgbRandom.textContent = `${obToRGB(target)}`.toUpperCase();
  rgbRandom.style.color = getContrastColor(target);
  rgbRandom.style.backgroundColor = obToRGB(target);
}

generadorColores();
let textoFinal = document.querySelector(".inicio > p");

let aciertos = document.querySelector("#aciertos");
let fallos = document.querySelector("#fallos");

aciertos.dataset.count = 0;
fallos.dataset.count = 0;
aciertos.textContent = `Jedi's: ${aciertos.dataset.count}`;
fallos.textContent = `Sith's: ${fallos.dataset.count}`;

let dibujo = document.querySelector("#dibujo");

let divs = document.querySelectorAll("div");
let end = false;

function ganar() {
  rgbRandom.textContent = `¡¿Jedi tu eres?!`;
  textoFinal.textContent = `${
    fraseFinalGanar[Math.floor(Math.random() * fraseFinalGanar.length)]
  }`;

  end = true;
}

function perder() {
  rgbRandom.textContent = `¡El lado oscuro siento en ti!`;
  textoFinal.textContent = `${
    fraseFinalPerder[Math.floor(Math.random() * fraseFinalPerder.length)]
  }  `;
  //<img src="/imagenes/snow-white-9.gif">

  end = true;
}

function handleDivClick(e) {
  let div = e.target;
  if (end) return;

  if (div.style.backgroundColor === rgbRandom.style.backgroundColor) {
    !aciertos.dataset.count
      ? (aciertos.dataset.count = 1)
      : aciertos.dataset.count++;
    textoFinal.textContent = `${
      fraseAciertos[Math.floor(Math.random() * fraseAciertos.length)]
    }`;
  } else {
    !fallos.dataset.count ? (fallos.dataset.count = 1) : fallos.dataset.count++;
    textoFinal.textContent = `${
      fraseFallos[Math.floor(Math.random() * fraseFallos.length)]
    }`;
  }

  aciertos.textContent = `Jedi's: ${aciertos.dataset.count}`;
  fallos.textContent = `Sith's: ${fallos.dataset.count}`;

  if (aciertos.dataset.count === "3") {
    ganar();
    return;
  }

  if (fallos.dataset.count === "3") {
    perder();
    return;
  }

  generadorColores();
}

for (const div of divs) {
  div.addEventListener("click", handleDivClick);
}

let button = document.querySelector("button");
function buttonClickHandler() {
  location.reload();
}
button.addEventListener("click", buttonClickHandler);
