var isTrue = true;
var address = document.getElementById("addr-text");
var phone = document.getElementById("phone-text");
var time = document.getElementById("time-text");
var title = document.getElementById("title");
var map = document.getElementById("mapemb");
var img1 = document.getElementById("im1");
var img2 = document.getElementById("im2");
var img3 = document.getElementById("im3");
var splide = new Splide('#main-carousel', {
    type: 'loop',
});
var goito = false;
var massa = false;
var laura = false;
splide.mount();

function updateSplide(images) {
    var splideSlides = document.querySelectorAll('.splide__slide img');
    splideSlides.forEach(function(slide, index) {
        slide.src = images[index];
    });
}

function changeButtonColor() {
  var ita = document.getElementById("it");
  var eng = document.getElementById("en");
  if (isTrue) {
    ita.style.backgroundColor = "#5C6B5F";
    ita.style.color = "white"
    eng.style.backgroundColor = "white";
    eng.style.color = "black"
  } else {
    eng.style.backgroundColor = "#5C6B5F";
    eng.style.color = "white"
    ita.style.backgroundColor = "white";
    ita.style.color = "black"
  }
}
// Chiamata alla funzione per inizializzare il colore del pulsante
changeButtonColor();


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
translatePage()
document.getElementById('en').addEventListener('click', function () {
    if (isTrue) {
        isTrue = false;
        changeButtonColor();
        translatePage();
        if (goito) {
            title.innerHTML = "Bologna Goito"
        }else if (massa) {
            title.innerHTML = "Bologna Massarenti"
        }else if(laura){
            title.innerHTML = "Bologna Laura Bassi"
        }
    }

});

document.getElementById('it').addEventListener('click', function () {
    if (!isTrue) {
        isTrue = true;
        changeButtonColor();
        translatePage();
        if (goito) {
            title.innerHTML = "Pizzeria a Goito"
        }else if (massa) {
            title.innerHTML = "Pizzeria a Massarenti"
        }else if(laura){
            title.innerHTML = "Pizzeria a Laura Bassi"
        }
    }
});
    document.getElementById("goito").addEventListener('click',function () {
        goito = true;
        massa = false;
        laura = false;
        var images = ["./Assets/Images/Goito1.jpg", "./Assets/Images/Goito2.jpg", "./Assets/Images/Goito3.jpg"];
        updateSplide(images);
        document.getElementById("infos").style.display = "block"
        if (isTrue) {
            title.innerHTML = "Pizzeria a Bologna Goito"
        }else{
            title.innerHTML= "Bologna Goito"
        }
        address.innerHTML = "<b>Bologna, Italia</b><br>Via Goito 3g"
        phone.innerHTML = "(+39) 051 262808"
        time.dataset.translateit = "<b>Pranzo:</b><br>Sabato e domenica dalle 12 alle 15 <br><br><b>Cena:</b><br>Tutti i giorni dalle 19 alle 24"
        time.dataset.translate = "<b>Lunch:</b><br>Saturday and Sunday from 12 am to 3 pm<br><br><b>Dinner:</b><br>Every day from 7 pm to 12 pm"
        map.src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJe6c22fnVf0cRNpLm8CTLjho&key=AIzaSyAvQkO9_MgXl9mb_TQHjsnP_NqJfs3qYdQ"
        img1.src = "./Assets/Images/Goito1.jpg"
        img2.src = "./Assets/Images/Goito2.jpg"
        img3.src = "./Assets/Images/Goito3.jpg"
    });
    document.getElementById("massarenti").addEventListener('click',function () {
        goito = false;
        massa = true;
        laura = false;
        var images = ["./Assets/Images/Massarenti1.jpg", "./Assets/Images/Massarenti2.jpg", "./Assets/Images/Massarenti3.jpg"];
        updateSplide(images);
        document.getElementById("infos").style.display = "block"
        if (isTrue) {
            title.innerHTML = "Pizzeria a Bologna Massarenti"
        }else{
            title.innerHTML= "Bologna Massarenti"
        }
        address.innerHTML = "<b>Bologna, Italia</b><br>Via Massarenti 91/C"
        phone.innerHTML = "(+39) 051 284 0081"
        time.dataset.translateit = "<b>Pranzo:</b><br>Al momento non siamo aperti a pranzo<br><br><b>Cena:</b><br>Tutti i giorni dalle 19 alle 24"
        time.dataset.translate = "<b>Lunch:</b><br>We are not opened at lunch at the moment<br><br><b>Dinner:</b><br>Every day from 7 pm to 12 pm"
        map.src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvazotQgrfkcRYJghrp7nyxw&key=AIzaSyAvQkO9_MgXl9mb_TQHjsnP_NqJfs3qYdQ"
        img1.src = "./Assets/Images/Massarenti1.jpg"
        img2.src = "./Assets/Images/Massarenti2.jpg"
        img3.src = "./Assets/Images/Massarenti3.jpg"
    });
    document.getElementById("laurabassi").addEventListener('click',function () {
        goito = false;
        massa = false;
        laura = true;
        var images = ["./Assets/Images/Laurabassi1.jpg", "./Assets/Images/Laurabassii2.jpg", "./Assets/Images/Laurabassi3.jpg"];
        updateSplide(images);
        document.getElementById("infos").style.display = "block"
        if (isTrue) {
            title.innerHTML = "Pizzeria a Laura Bassi"
        }else{
            title.innerHTML= "Bologna Laura Bassi"
        }
        address.innerHTML = "<b>Bologna, Italia</b><br>Via Laura Bassi Verratti 1h"
        phone.innerHTML = "(+39) 051 281 5313"
        time.dataset.translateit = "<b>Pranzo:</b><br>Tutti i giorni dalle 12 alle 15<br><br><b>Cena:</b><br>Tutti i giorni dalle 19 alle 24"
        time.dataset.translate = "<b>Lunch:</b><br>Every day from 12 am to 3 pm<br><br><b>Dinner:</b><br>Every day from 7 pm to 12 pm"
        map.src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJj2pHGw8rfkcRV46gwJqxqAM&key=AIzaSyAvQkO9_MgXl9mb_TQHjsnP_NqJfs3qYdQ"
        img1.src = "./Assets/Images/Laurabassi1.jpg"
        img2.src = "./Assets/Images/Laurabassi2.jpg"
        img3.src = "./Assets/Images/Laurabassi3.jpg"
    });
