const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

		//initialisation des variables

let parentElement = document.getElementById("banner");
let dotsDiv = document.createElement("div");
dotsDiv.className = "dots"; 
let ulElement = document.createElement("ul");

slides.forEach((slide, index) => {
    let imgElement = document.createElement("img");
    imgElement.src = slide.image;

    let pElement = document.createElement("p");
    pElement.innerHTML = slide.tagLine;

    let divBannerImg = document.createElement("div");
    divBannerImg.className = "banner-img";
    divBannerImg.appendChild(imgElement);
    divBannerImg.appendChild(pElement);

    parentElement.appendChild(divBannerImg);

    // Créer et ajouter la boule li pour chaque boule
	
    let liElement = document.createElement("li");
    let dotElement = document.createElement("span");
    dotElement.className = "dot";
    dotElement.onclick = function() { currentSlide(index + 1); };
    
	liElement.appendChild(dotElement);
    ulElement.appendChild(liElement);
});


dotsDiv.appendChild(ulElement);
parentElement.appendChild(dotsDiv);


//initialisé à 1
let slideIndex = 1;
showSlides(slideIndex);

//fonction modifie l'index de la diapositive actuelle
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
//définit la diapositive actuelle à l'index n,

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner-img");
  let dots = document.getElementsByClassName("dot");
  
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("dot_selected", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dot_selected";
}