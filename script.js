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
translate();