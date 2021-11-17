const accordionContainer = document.querySelector('.accordion__options');

accordionContainer.addEventListener('click', e => {
    const ariaExpanded = e.target.getAttribute('aria-expanded');
    
    if (e.target.classList.contains('accordion__option')) {
        e.target.classList.toggle('open');

        if (ariaExpanded === 'false') 
            e.target.setAttribute('aria-expanded', 'true');
        else 
            e.target.setAttribute('aria-expanded', 'false');
    }
});