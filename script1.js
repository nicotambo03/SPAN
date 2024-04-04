document.addEventListener("DOMContentLoaded", function() {
    translatePage(); 
    changeButtonColor();  
});

var isTrue = true;

function changeButtonColor() {
    var ita = document.getElementById("it");
    var eng = document.getElementById("en");
    if (isTrue) {
        ita.style.backgroundColor = "#5C6B5F";
        ita.style.color = "white";
        eng.style.backgroundColor = "white";
        eng.style.color = "black";
    } else {
        eng.style.backgroundColor = "#5C6B5F";
        eng.style.color = "white";
        ita.style.backgroundColor = "white";
        ita.style.color = "black";
    }
}

function translatePage() {
    var divsToTranslate = document.querySelectorAll('[data-translate]');
    divsToTranslate.forEach(function(div) {
        if (!isTrue) {
            div.innerHTML = div.dataset.translate;
        } else {
            div.innerHTML = div.dataset.translateit;
        }
    });
}

document.getElementById('en').addEventListener('click', function () {
    if (isTrue) {
        isTrue = false;
        changeButtonColor();
        translatePage();
    }
});

document.getElementById('it').addEventListener('click', function () {
    if (!isTrue) {
        isTrue = true;
        changeButtonColor();
        translatePage();
    }
});


const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
  currentIndex = index;
  updateSidebarImages();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function updateSidebarImages() {
  const sidebarLeft = document.getElementById('sidebarLeft');
  const sidebarRight = document.getElementById('sidebarRight');
  const leftIndex = (currentIndex - 1 + images.length) % images.length;
  const rightIndex = (currentIndex + 1) % images.length;

  sidebarLeft.innerHTML = `<img src="${images[leftIndex].src}" alt="Immagine ${leftIndex + 1}">`;
  sidebarRight.innerHTML = `<img src="${images[rightIndex].src}" alt="Immagine ${rightIndex + 1}">`;

  // Aggiorna stile immagini nei div laterali
  sidebarLeft.querySelector('img').style.opacity = '0.5';
  sidebarRight.querySelector('img').style.opacity = '0.5';
}

// Mostra la prima immagine all'avvio
showImage(0);