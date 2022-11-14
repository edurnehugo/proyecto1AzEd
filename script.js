"use strict";
let rgbRandom = document.querySelector("#rgbRandom");

let color0 = document.querySelector("#color0");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let color3 = document.querySelector("#color3");
let color4 = document.querySelector("#color4");
let color5 = document.querySelector("#color5");


let coloresAleatorios = [];

function generadorColores() {
    

    let r;
    let g;
    let b;
    
        
    for (let i = 0; i < 6 ; i++) {
        
        r = Math.round(Math.random() * (256 - 0) + 0);
        g = Math.round(Math.random() * (256 - 0) + 0);
        b = Math.round(Math.random() * (256 - 0) + 0);
        
        coloresAleatorios.push(`rgb(${r}, ${g}, ${b})`);
    }
    
    console.log(coloresAleatorios);
}
generadorColores();

color0.style.backgroundColor = coloresAleatorios[0];
color1.style.backgroundColor = coloresAleatorios[1];
color2.style.backgroundColor = coloresAleatorios[2];
color3.style.backgroundColor = coloresAleatorios[3];
color4.style.backgroundColor = coloresAleatorios[4];
color5.style.backgroundColor = coloresAleatorios[5];

let colorAdivina = Math.round(Math.random() * (5 - 0) + 0);

let rgb = rgbRandom.textContent = `${coloresAleatorios[colorAdivina]}`.toUpperCase();

console.log(rgb.toLowerCase());
console.log(color0.style.backgroundColor);
let aciertos = document.querySelector("#aciertos");
let fallos = document.querySelector("#fallos");

let divs = document.querySelectorAll("div");


function handleLiClick(e) {
  
  let div = e.target;
  console.log(div);
  
  if (div.style.backgroundColor === rgb.toLowerCase()) {
    aciertos.dataset.count = 1;
    aciertos.textContent = `Aciertos: ${aciertos.dataset.count}`;

  } else {
    fallos.dataset.count = 1;
    fallos.textContent = `Fallos: ${fallos.dataset.count}`;
}

}

for (const div of divs) {

    div.addEventListener("click", handleLiClick);
}



