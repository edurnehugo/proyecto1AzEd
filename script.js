"use strict";
let rgbRandom = document.querySelector("#rgbRandom");

let color0 = document.querySelector("#color0");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let color3 = document.querySelector("#color3");
let color4 = document.querySelector("#color4");
let color5 = document.querySelector("#color5");

let rgb;

let aciertos = document.querySelector("#aciertos");
let fallos = document.querySelector("#fallos");

aciertos.dataset.count = 0;
fallos.dataset.count = 0; 
aciertos.textContent = `Aciertos: ${aciertos.dataset.count}`;
fallos.textContent = `Fallos: ${fallos.dataset.count}`;
console.log(aciertos.dataset.count);
console.log(fallos.dataset.count);


function generadorColores() {
  
  let coloresAleatorios = [];
  
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
      
      color0.style.backgroundColor = coloresAleatorios[0];
      color1.style.backgroundColor = coloresAleatorios[1];
      color2.style.backgroundColor = coloresAleatorios[2];
      color3.style.backgroundColor = coloresAleatorios[3];
      color4.style.backgroundColor = coloresAleatorios[4];
      color5.style.backgroundColor = coloresAleatorios[5];
      
      rgb = rgbRandom.textContent = `${coloresAleatorios[Math.round(Math.random() * (5 - 0) + 0)]}`.toUpperCase();
      
    }
    generadorColores();
    
    let divs = document.querySelectorAll("div");
    
    function handleDivClick(e) {
      let div = e.target;
      if (aciertos.dataset.count < 2 /* || !aciertos.dataset.count) */ && fallos.dataset.count < 2 ) {
        
        switch (div.style.backgroundColor === rgb.toLowerCase()) {
          case true:
        !aciertos.dataset.count? aciertos.dataset.count = 1 : aciertos.dataset.count++
        generadorColores();
        break;
        
        case false:
          !fallos.dataset.count? fallos.dataset.count = 1 : fallos.dataset.count++;
          generadorColores();
          break;
        }
        
        aciertos.textContent = `Aciertos: ${aciertos.dataset.count}`;
        fallos.textContent =  `Fallos: ${fallos.dataset.count}`;
        
        console.log(aciertos.dataset.count);
        console.log(fallos.dataset.count);

      } else if (aciertos.dataset.count == 2) {

    rgbRandom.textContent = `¡HAS GANADO!`;
    aciertos.textContent = `Aciertos: ${aciertos.dataset.count = 3}`;
    
  } else if (fallos.dataset.count == 2) {

    rgbRandom.textContent = `¡HAS PERDIDO!`;
    fallos.textContent = `Fallos: ${fallos.dataset.count = 3}`;

  }

}

for (const div of divs) {
  div.addEventListener("click", handleDivClick);
}    

let button = document.querySelector("button");
function buttonClickHandler() {
    location.reload();
}

button.addEventListener("click", buttonClickHandler);




