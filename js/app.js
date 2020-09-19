// Global variables
const navbar = document.getElementById('navbar__list');
const a = document.getElementsByTagName('a');
const sections = document.getElementsByTagName('section');

// function invocation
addElementsToNav();


// build the nav
  function addElementsToNav(){
    for(let i = 1; i <= sections.length; i ++) {
        const myLi = document.createElement('a');

        myLi.textContent = sections[i-1].dataset.nav;

            
        /* href set to corresponding section Number
        scroll behaviour set to smooth in css */
        myLi.setAttribute('href', '#section' + i);
        navbar.appendChild(myLi);
        
    }
}


// add active class to section that is in viewport
// setTimeout to throttle scroll event
window.addEventListener('scroll', function(){
    setTimeout(() => {

        // first remove active class from all sections
        for(let i = 1; i <= sections.length; i++){
            sections[i-1].classList.remove('your-active-class');
        }

        // add active class to element that is in view
        for(let i = 1; i <= sections.length; i++) {
            const elementTop = sections[i-1].getBoundingClientRect().top
                if(elementTop > -260 && elementTop < 530){
                    sections[i-1].classList.add('your-active-class');
            }
        }


    }, 2000)
})





