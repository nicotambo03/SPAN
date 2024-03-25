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

