"use strict";
let rgbRandom = document.querySelector("#rgbRandom");
let textoFinal = document.querySelector(".inicio > p");

let color0 = document.querySelector("#color0");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let color3 = document.querySelector("#color3");
let color4 = document.querySelector("#color4");
let color5 = document.querySelector("#color5");

let rgb;

function getContrastColor({ r, g, b }) {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  console.log(brightness);

  if (Math.abs(brightness - 255) > brightness) {
    return `rgb(255,255,255)`;
  } else {
    return `rgb(0,0,0)`;
  }
}

function obToRGB({ r, g, b }) {
  return `rgb(${r},${g}, ${b})`;
}

function generateRandom(min = 0, max = 100) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

function generadorColores() {
  let coloresAleatorios = [];

  /*
  let r;
  let g;
  let b;
  
  for (let i = 0; i < 6 ; i++) {
    
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    
    coloresAleatorios.push(`rgb(${r}, ${g}, ${b})`);
  } */

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let rNum = 0;
  let gNum = 0;
  let bNum = 0;

  for (let i = 0; i < 6; i++) {
    //coloresAleatorios.push(`rgb(${r + rNum}, ${g + gNum}, ${b + bNum})`);
    coloresAleatorios.push({ r: r + rNum, g: g + gNum, b: b + bNum });

    rNum += generateRandom(-15, 15); // escoger numero aleatorio entre -15 y 15
    gNum += generateRandom(-15, 15);
    bNum += generateRandom(-15, 15);
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

rgbRandom.style.color = "rgb(238, 235, 235)";

generadorColores();

let aciertos = document.querySelector("#aciertos");
let fallos = document.querySelector("#fallos");

aciertos.dataset.count = 0;
fallos.dataset.count = 0;
aciertos.textContent = `Aciertos: ${aciertos.dataset.count}`;
fallos.textContent = `Fallos: ${fallos.dataset.count}`;

//let gif = document.querySelector("#gif");

let divs = document.querySelectorAll("div");
let end = false;

function win() {
  rgbRandom.textContent = `¡HAS GANADO!`;
  //aciertos.textContent = `Aciertos: ${aciertos.dataset.count = 3}`;
  textoFinal.textContent = `Has ganado!! `;
  textoFinal.style.color = "rgb(233, 96, 42)";
  end = true;
}

function loose() {
  rgbRandom.textContent = `¡HAS PERDIDO!`;
  //fallos.textContent = `Fallos: ${fallos.dataset.count = 3}`;
  textoFinal.innerHTML = `
  <img src="/imagenes/snow-white-9.gif">
  <p>Te hemos avisado y bien no has mirado. Como a los correctos no le has dado, para ti el juego ha terminado.</p>
  `;
  textoFinal.style.color = "rgb(233, 96, 42)";
  end = true;
}

function handleDivClick(e) {
  let div = e.target;

  if (end) return;

  if (div.style.backgroundColor === rgbRandom.style.backgroundColor) {
    !aciertos.dataset.count
      ? (aciertos.dataset.count = 1)
      : aciertos.dataset.count++;
  } else {
    !fallos.dataset.count ? (fallos.dataset.count = 1) : fallos.dataset.count++;
  }

  aciertos.textContent = `Aciertos: ${aciertos.dataset.count}`;
  fallos.textContent = `Fallos: ${fallos.dataset.count}`;

  if (aciertos.dataset.count === "3") {
    win();
    return;
  }

  if (fallos.dataset.count === "3") {
    loose();
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
