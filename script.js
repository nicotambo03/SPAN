function translatePage() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        const translatedText = element.getAttribute('data-translate');
        element.setAttribute('data-translate', element.textContent);
        element.textContent = translatedText;
    });
}

const translateButton = document.getElementById('en');
translateButton.addEventListener('click', translatePage);