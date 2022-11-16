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


function generadorColores() {
  
  let coloresAleatorios = [];
  
 /*  let r;
  let g;
  let b;
  
  for (let i = 0; i < 6 ; i++) {
    
    r = Math.round(Math.random() * (256 - 0) + 0);
    g = Math.round(Math.random() * (256 - 0) + 0);
    b = Math.round(Math.random() * (256 - 0) + 0);
    
    coloresAleatorios.push(`rgb(${r}, ${g}, ${b})`);
  } */
  let r = Math.round(Math.random() * (256 - 0) + 0);
  let g = Math.round(Math.random() * (256 - 0) + 0);
  let b = Math.round(Math.random() * (256 - 0) + 0);

  let rNum = 0;
  let gNum = 0;
  let bNum = 0;

  for (let i = 0; i < 6; i++) {
    coloresAleatorios.push(`rgb(${r + rNum}, ${g + gNum}, ${b + bNum})`);

    rNum += 8;
    gNum += 9;
    bNum += 10;
  }


  console.log(coloresAleatorios);
      
  color0.style.backgroundColor = coloresAleatorios[0];
  color1.style.backgroundColor = coloresAleatorios[1];
  color2.style.backgroundColor = coloresAleatorios[2];
  color3.style.backgroundColor = coloresAleatorios[3];
  color4.style.backgroundColor = coloresAleatorios[4];
  color5.style.backgroundColor = coloresAleatorios[5];
  
  rgb = rgbRandom.textContent = `${coloresAleatorios[Math.round(Math.random() * (5 - 0) + 0)]}`.toUpperCase();
  console.log (rgb);
  rgbRandom.style.backgroundColor = rgb;    
}

rgbRandom.style.color = "rgb(238, 235, 235)";

generadorColores();

let gif = document.querySelector("#gif");

let divs = document.querySelectorAll("div");

function handleDivClick(e) {
  let div = e.target;
  if (aciertos.dataset.count < 2  && fallos.dataset.count < 2 ) {
    
    switch (div.style.backgroundColor === rgbRandom.style.backgroundColor) {
      case true:
        !aciertos.dataset.count
        ? (aciertos.dataset.count = 1)
        : aciertos.dataset.count++;
        generadorColores();
        break;
        
        case false:
          !fallos.dataset.count
          ? (fallos.dataset.count = 1)
          : fallos.dataset.count++;
          generadorColores();
          break;
        }
        
        aciertos.textContent = `Aciertos: ${aciertos.dataset.count}`;
        fallos.textContent =  `Fallos: ${fallos.dataset.count}`;
        
        console.log(div);
  } else if (aciertos.dataset.count == 2) {

    rgbRandom.textContent = `¡HAS GANADO!`;
    aciertos.textContent = `Aciertos: ${aciertos.dataset.count = 3}`;


  } else if (fallos.dataset.count == 2) {

    rgbRandom.textContent = `¡HAS PERDIDO!`;
    fallos.textContent = `Fallos: ${fallos.dataset.count = 3}`;

    
   /*  const myImage = new Image(475, 356);
    myImage.src = "snow-white-9.gif";
    gif.append(myImage); */




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
