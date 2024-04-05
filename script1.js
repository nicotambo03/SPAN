document.addEventListener("DOMContentLoaded", function () {
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
  divsToTranslate.forEach(function (div) {
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



function createCarousel(images, carouselId, navigationId, sidebarLeftId, sidebarRightId) {
  const carousel = document.getElementById(carouselId);
  const navigation = document.getElementById(navigationId);
  const sidebarLeft = document.getElementById(sidebarLeftId);
  const sidebarRight = document.getElementById(sidebarRightId);
  let currentIndex = 0;

  carousel.nextImage = function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  };

  carousel.prevImage = function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  };

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
    updateNavigation();
  }

  function updateSidebarImages() {
    const leftIndex = (currentIndex - 1 + images.length) % images.length;
    const rightIndex = (currentIndex + 1) % images.length;

    sidebarLeft.innerHTML = `<img src="${images[leftIndex].src}" alt="Immagine ${leftIndex + 1}">`;
    sidebarRight.innerHTML = `<img src="${images[rightIndex].src}" alt="Immagine ${rightIndex + 1}">`;

    sidebarLeft.querySelector('img').style.opacity = '0.5';
    sidebarRight.querySelector('img').style.opacity = '0.5';
  }

  function updateNavigation() {
    navigation.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      if (i === currentIndex) {
        bar.classList.add('active');
        if (i === currentIndex) {
          bar.classList.add('double');
        }
      }
      navigation.appendChild(bar);
    }
  }

  showImage(0);
}

// Inizializzazione dei carousel
const images1 = document.querySelectorAll('#carousel1 img');
createCarousel(images1, 'carousel1', 'navigation1', 'sidebarLeft1', 'sidebarRight1');

const images2 = document.querySelectorAll('#carousel2 img');
createCarousel(images2, 'carousel2', 'navigation2', 'sidebarLeft2', 'sidebarRight2');

const images3 = document.querySelectorAll('#carousel3 img');
createCarousel(images3, 'carousel3', 'navigation3', 'sidebarLeft3', 'sidebarRight3');

// Aggiungiamo gli eventi onclick ai bottoni di navigazione
document.getElementById('carousel1').querySelector('.controls button:first-child').onclick = function () {
  document.getElementById('carousel1').prevImage();
};

document.getElementById('carousel1').querySelector('.controls button:last-child').onclick = function () {
  document.getElementById('carousel1').nextImage();
};

document.getElementById('carousel2').querySelector('.controls button:first-child').onclick = function () {
  document.getElementById('carousel2').prevImage();
};

document.getElementById('carousel2').querySelector('.controls button:last-child').onclick = function () {
  document.getElementById('carousel2').nextImage();
};

document.getElementById('carousel3').querySelector('.controls button:first-child').onclick = function () {
  document.getElementById('carousel3').prevImage();
};

document.getElementById('carousel3').querySelector('.controls button:last-child').onclick = function () {
  document.getElementById('carousel3').nextImage();
};


