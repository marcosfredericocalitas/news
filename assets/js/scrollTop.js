// Scroll to the top
function scrollTop(buttom) {
    let btn = document.getElementById(buttom);

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

scrollTop('scroll-top-btn');