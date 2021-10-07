const accordionContainer = document.querySelector('.accordion__options');
const accordionOptions = document.querySelectorAll('.accordion__option');

accordionOptions.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains('open'))
            option.classList.remove('open');
        else 
            option.classList.add('open');
    });
});