
document.addEventListener('DOMContentLoaded', function() {
    addEventListeners()
});

function addEventListeners() {
    //function to add responsive designe to the nav
    responsiveMenu()

    //Function to add smooth scroll
    smoothScroll()

    form()
}

function responsiveMenu() {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.addEventListener('click', () => {
        const menu = document.querySelector('.nav-content')
        menu.classList.toggle('active-mobile')
})}

function smoothScroll() {
    const sections = document.querySelectorAll('.nav-content a');
    sections.forEach( section => {
        section.addEventListener('click', (e) => {
            e.preventDefault()
            const section = document.querySelector(e.target.attributes.href.value)
            section.scrollIntoView({
                behavior: 'smooth'
            });
        })
    })
}




