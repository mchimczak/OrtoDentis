const navHeader = document.querySelector('.nav__header');
const menuIcon = document.querySelector('.nav__icon');
const dropdownMenu = document.querySelector('.nav__dropdown-menu');
const menu = document.querySelector('.nav__dropdown-menu__block');
const arrow = document.querySelector('.nav__dropdown-menu__arrow');
const cross = document.querySelector('.nav__cross');
const links = document.querySelectorAll('.link');
const main = document.querySelector('.main__img');
const buttons = document.querySelectorAll('button');



window.onload = function () {
    setTimeout(() => main.classList.add('enlarge'), 100)
    setTimeout(() => navHeader.classList.add('active-enter'), 450);
}




// NAV MENU

function dropdown_toggle() {
    menuIcon.classList.toggle('disable');
    cross.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
    dropdownMenu.classList.toggle('active-enter')
    setTimeout(() => arrow.style.setProperty('opacity', '1'), 10);
}

menuIcon.addEventListener('click', dropdown_toggle);
cross.addEventListener('click', dropdown_toggle);
links.forEach(link => link.addEventListener('click', dropdown_toggle));


//  BUTTONS HANDLER 


buttons.forEach(button => button.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    let sectionContent = button.parentNode;
    let section = button.parentNode.parentNode;

    // if (button.innerHTML === "Więcej") {
    //     window.scrollTo(0, sectionContent.offsetTop - nav.offsetHeight)
    // } else {
    //     window.scrollTo(0, section.offsetTop - nav.offsetHeight)
    // }

    if (button.innerHTML === "Więcej" || sectionContent.classList.contains("section__card")) {
        window.scrollTo(0, sectionContent.offsetTop - nav.offsetHeight)
    } else {
        window.scrollTo(0, section.offsetTop - nav.offsetHeight)
    }



    button.innerHTML === "Więcej" ? button.innerHTML = "Zwiń" : button.innerHTML = "Więcej";
    button.previousElementSibling.classList.toggle('section__content--hidden');
    // window.scrollTo(0, sectionContent.offsetTop - nav.offsetHeight);
}));


// SECTION 5 GALLERY SLIDESHOW

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}