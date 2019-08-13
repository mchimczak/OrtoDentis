const navHeader = document.querySelector('.nav__header');
const menuIcon = document.querySelector('.nav__icon');
const dropdownMenu = document.querySelector('.nav__dropdown-menu');
const menu = document.querySelector('.nav__dropdown-menu__block');
const arrow = document.querySelector('.nav__dropdown-menu__arrow');
const cross = document.querySelector('.nav__cross');
const links = document.querySelectorAll('.link');

const main = document.querySelector('.main__img');

// const s3btn = document.getElementById('s3btn');
// const s3hidden = document.getElementById('s3hidden');

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
    setTimeout(() => dropdownMenu.classList.toggle('active-enter'), 10);
    setTimeout(() => arrow.style.setProperty('opacity', '1'), 10);
}

menuIcon.addEventListener('click', dropdown_toggle);
cross.addEventListener('click', dropdown_toggle);
links.forEach(link => link.addEventListener('click', dropdown_toggle));


// function toggleSection() {

//     s3btn.innerHTML === "Więcej" ? s3btn.innerHTML = "Zwiń" : s3btn.innerHTML = "Więcej";

//     s3hidden.classList.toggle('section__content--hidden');
// };

// s3btn.addEventListener('click', toggleSection);




buttons.forEach(button => button.addEventListener('click', () => {
    button.innerHTML === "Więcej" ? button.innerHTML = "Zwiń" : button.innerHTML = "Więcej";
    button.previousElementSibling.classList.toggle('section__content--hidden');
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