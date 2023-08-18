//Get elements
function getElements() {
    return {
        navbar: document.getElementById('navbar'),
        topNavbar: document.getElementById('top-navbar'),
        bottomNavbar: document.getElementById('bottom-navbar'),
        mainContent: document.getElementById('main-content'),
        scrollTopBtn: document.getElementById('scroll-top-btn')
    };
}

// Add classes when scrolling the screen
function addclassByScroll() {
    const { navbar, topNavbar, bottomNavbar, mainContent, scrollTopBtn } = getElements();
    const windowScroll = window.scrollY;
    const windowScroll112 = windowScroll > 112;
    const windowScroll400 = windowScroll > 400;

    const windoWidth = window.innerWidth;
    if (windoWidth > 1050) {
        navbar.classList.toggle('has-no-padding', windowScroll112);
        topNavbar.classList.toggle('is-none', windowScroll112);
        bottomNavbar.classList.toggle('is-fixed', windowScroll112);
        mainContent.classList.toggle('is-top', windowScroll112);
    }
    scrollTopBtn.classList.toggle('is-visible', windowScroll400);
}

// Remove classes when resizing the screen
function removeClassByResize() {
    const { navbar, topNavbar, bottomNavbar, mainContent } = getElements();
    const windoWidth = window.innerWidth;
    if (windoWidth < 1050) {
        navbar.classList.remove('has-no-padding');
        topNavbar.classList.remove('is-none');
        bottomNavbar.classList.remove('is-fixed');
        mainContent.classList.remove('is-top');
    }
}

// Add events manipulators
window.addEventListener('scroll', addclassByScroll);
window.addEventListener('resize', removeClassByResize);

