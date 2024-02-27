var isTrue = true;


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


function translate() {
    document.getElementById('en').addEventListener('click', function () {
        isTrue = false;
        changeButtonColor();
        
    })
    document.getElementById('it').addEventListener('click', function () {
        isTrue = true;
        changeButtonColor();
    })
    document.getElementById('en').addEventListener('click', function () {
        var divsToTranslate = document.querySelectorAll('[data-translate]');
        divsToTranslate.forEach(function(div) {
            var originalHTML = div.innerHTML;
            var translatedHTML = div.dataset.translate;
            div.innerHTML = translatedHTML;
            div.dataset.translate = originalHTML;
        });
    });

    document.getElementById('it').addEventListener('click', function () {
        var divsToTranslate = document.querySelectorAll('[data-translate]');
        divsToTranslate.forEach(function(div) {
            var originalHTML = div.dataset.translate;
            var translatedHTML = div.innerHTML;
            div.innerHTML = originalHTML;
            div.dataset.translate = translatedHTML;
        });
    });
}
function infocontentesetter() {
    var address = document.getElementById("addr-text");
    var phone = document.getElementById("phone-text");
    var time = document.getElementById("time-text");
    var title = document.getElementById("title");
    var map = document.getElementById("mapemb");
    document.getElementById("goito").addEventListener('click',function () {
        translate();translate();
        document.getElementById("infos").style.display = "block"
        title.innerHTML = "Pizzeria a Bologna Goito"
        title.dataset.translate = "Bologna Goito"
        address.innerHTML = "<b>Bologna, Italia</b><br>Via Goito 3g"
        phone.innerHTML = "(+39) 051 262808"
        time.innerHTML = "<b>Pranzo:</b><br>Sabato e domenica dalle 12 alle 15 <br><br><b>Cena:</b><br>Tutti i giorni dalle 19 alle 24"
        time.dataset.translate = "<b>Lunch:</b><br>Saturday and Sunday from 12 am to 3 pm<br><br><b>Dinner:</b><br>Every day from 7 pm to 12 pm"
        map.src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJe6c22fnVf0cRNpLm8CTLjho&key=AIzaSyAvQkO9_MgXl9mb_TQHjsnP_NqJfs3qYdQ"
    });
    document.getElementById("massarenti").addEventListener('click',function () {
        translate();translate();
        document.getElementById("infos").style.display = "block"
        title.innerHTML = "Pizzeria a Massarenti"
        title.dataset.translate = "Bologna Massarenti"
        address.innerHTML = "<b>Bologna, Italia</b><br>Via Massarenti 91/C"
        phone.innerHTML = "(+39) 051 284 0081"
        time.innerHTML = "<b>Pranzo:</b><br>Al momento non siamo aperti a pranzo<br><br><b>Cena:</b><br>Tutti i giorni dalle 19 alle 24"
        time.dataset.translate = "<b>Lunch:</b><br>We are not opened at lunch at the moment<br><br><b>Dinner:</b><br>Every day from 7 pm to 12 pm"
        map.src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvazotQgrfkcRYJghrp7nyxw&key=AIzaSyAvQkO9_MgXl9mb_TQHjsnP_NqJfs3qYdQ"
    });
    document.getElementById("laurabassi").addEventListener('click',function () {
        translate();translate();
        document.getElementById("infos").style.display = "block"
        title.innerHTML = "Pizzeria a Laura Bassi"
        title.dataset.translate = "Bologna Laura Bassi"
        address.innerHTML = "<b>Bologna, Italia</b><br>Via Laura Bassi Verratti 1h"
        phone.innerHTML = "(+39) 051 281 5313"
        time.innerHTML = "<b>Pranzo:</b><br>Tutti i giorni dalle 12 alle 15<br><br><b>Cena:</b><br>Tutti i giorni dalle 19 alle 24"
        time.dataset.translate = "<b>Lunch:</b><br>Every day from 12 am to 3 pm<br><br><b>Dinner:</b><br>Every day from 7 pm to 12 pm"
        map.src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJj2pHGw8rfkcRV46gwJqxqAM&key=AIzaSyAvQkO9_MgXl9mb_TQHjsnP_NqJfs3qYdQ"
    });
}
translate();
infocontentesetter();
