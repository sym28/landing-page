// Global variables
const navbar = document.getElementById('navbar__list');
const a = document.getElementsByTagName('a');
const sections = document.getElementsByTagName('section');
const navIcon = document.querySelector('.icon');

// function invocation
addElementsToNav();

// build the nav
function addElementsToNav() {
    for (let i = 1; i <= sections.length; i++) {
        const myLi = document.createElement('a');
        myLi.textContent = sections[i - 1].dataset.nav;

        navbar.appendChild(myLi);

    }
}

// make navbar responsive for mobile screens
navIcon.addEventListener('click', function(){  
    navbar.classList.toggle('responsive');
})


// add active class to section that is in viewport
// setTimeout to throttle scroll event
window.addEventListener('scroll', function () {
    setTimeout(() => {

        // first remove active class from all sections and anchors
        for (let i = 1; i <= sections.length; i++) {
            sections[i - 1].classList.remove('your-active-class');
            a[i - 1].classList.remove('active-nav-link');
        }

        // add active class to section and anchor that is in view
        for (let i = 1; i <= sections.length; i++) {
            const elementTop = sections[i - 1].getBoundingClientRect().top
            if (elementTop > -260 && elementTop < 530) {
                sections[i - 1].classList.add('your-active-class');
                a[i - 1].classList.add('active-nav-link');
            }
        }
    }, 1500)
})

// smooth scroll when anchors are clicked
window.addEventListener('click', (e) => {

    // condition to check if the event clicked is an anchor
    if(e.target.nodeName === 'A'){

        // format anchors innerText string to use as id
        const anchorText = e.target.innerText.split(' ').join('').toLowerCase();
        const targetSection = document.getElementById(anchorText)
           
        // scroll function
        targetSection.scrollIntoView({behavior: 'smooth'});

        // remove active class from all anchors then add active nav link class to target
        for (let i = 1; i <= sections.length; i++) {
            a[i - 1].classList.remove('active-nav-link');
        }
        e.target.classList.add('active-nav-link');
    }
});