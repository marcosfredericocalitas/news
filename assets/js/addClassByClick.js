// Add class name in a html element
function addClassByClick(element1, element2, event, className) {
    let button = document.getElementById(element1);
    let container = document.getElementById(element2);

    button.addEventListener(event, () => {
        container.classList.toggle(className);
    });
}

// Show and hide navigation bar button icons
addClassByClick('btn-mobile', 'open-menu-icon', 'click', 'is-none')
addClassByClick('btn-mobile', 'close-menu-icon', 'click', 'is-none')

// Open menu mobile
addClassByClick('btn-mobile', 'menu-mobile', 'click', 'is-visible');
addClassByClick('btn-mobile', 'menu-mobile-wrapper', 'click', 'is-visible');
addClassByClick('btn-mobile', 'menu-search', 'click', 'is-visible');