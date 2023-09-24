const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", left);

let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", left);

function left() {
  alert(NbrImage);
}

//comptage nombre de photo et insert dans html

let NbrImage = slides.length;
let Nbpoints = 0;
let points = document.createElement(`<li class="dot dot_selected"></li>`);
points.innerText = 

while (Nbpoints < NbrImage) {
  Nbpoints++;

  console.log(Nbpoints);
}
