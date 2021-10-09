const accordionContainer = document.querySelector('.accordion__options');

accordionContainer.addEventListener('click', e => {
    if (e.target.classList.contains('accordion__option')) {
        e.target.classList.toggle('open');
    }
});