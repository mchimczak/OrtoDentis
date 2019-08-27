const navHeader = document.querySelector('.nav__header');
const main = document.querySelector('.main__img');
const headerContent = document.querySelector('.main__header__content')

window.onload = function () {
    // setTimeout(() => main.classList.add('enlarge'), 100)
    // setTimeout(() => navHeader.classList.add('active-enter'), 450);
    setTimeout(() => navHeader.classList.add('active-enter'), 450);

    var promise =  new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(main.classList.add('enlarge'));
         }, 100);
    });

    // promise.then(setTimeout(() => headerContent.classList.add('showing')), 10000);
    promise.then(setTimeout(function() {
        headerContent.classList.add('showing');
    }), 5000)

}




// NAV MENU
const menuIcon = document.querySelector('.nav__icon');
const dropdownMenu = document.querySelector('.nav__dropdown-menu');
const menu = document.querySelector('.nav__dropdown-menu__block');
const arrow = document.querySelector('.nav__dropdown-menu__arrow');
const cross = document.querySelector('.nav__cross');
const links = document.querySelectorAll('.link');

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



// NAV LINKS HANDLER


//  BUTTONS HANDLER 
const buttons = document.querySelectorAll('.section__btn');

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


// SECTION 2 @MEDIA 992PX HOVERING EFFECT

const cards = document.querySelectorAll('section:nth-of-type(2) .section__card');
const highlight = document.createElement('span');
const infoButton = document.querySelector('.section__btn--info');
highlight.classList.add('section__card--highlight');
document.body.append(highlight);


function highlightElement() {
    // highlight.style.setProperty('display', 'block');
    highlight.classList.add('active-enter');
    // this.classList.add('section__card--enlarge');
    // const cardCoords = this.getBoundingClientRect();
    // const coords = {
    //     width:  cardCoords.width,
    //     height: cardCoords.height,
    //     top:    cardCoords.top + window.scrollY,
    //     left:   cardCoords.left + window.scrollX
    // }; 

    infoButton.classList.add('disable');



    if (this.children[3] != undefined) {
        const photo = this.children[0];
        const header = this.children[1];
        const text = this.children[2];
        const info = this.children[3];
        // text.style.setProperty('display', 'block') && info.style.setProperty('display', 'block');
        photo.style.setProperty('transform', 'translate(-50%) scale(1.4)');
        header.classList.add('highlight');
        text.classList.add('active') || info.classList.add('active');
        setTimeout(() => text.classList.add('active-enter') || info.classList.add('active-enter'),150);

        const textCoords = text.getBoundingClientRect();
        const headcoords = {
            width:  textCoords.width,
            height: textCoords.height,
            top:    textCoords.top + window.scrollY,
            left:   textCoords.left + window.scrollX
        };

        const infoCoords = info.getBoundingClientRect();
        const bodycoords = {
            width:  infoCoords.width,
            height: infoCoords.height,
            top:    infoCoords.top + window.scrollY,
            left:   infoCoords.left + window.scrollX
        };  
    
        highlight.style.width = `${bodycoords.width}px`;
        highlight.style.height = `${headcoords.height + bodycoords.height}px`;
        highlight.style.transform = `translate(${headcoords.left}px, ${headcoords.top}px)`;
    } else {
        const photo = this.children[0];
        const header = this.children[1];
        const text = this.children[2];
        // text.style.setProperty('display', 'block');
        photo.style.setProperty('transform', 'translate(-50%) scale(1.4)');
        header.classList.add('highlight');
        text.classList.add('active');
        setTimeout(() => text.classList.add('active-enter'),150);
        const textCoords = text.getBoundingClientRect();
        const coords = {
            width:  textCoords.width,
            height: textCoords.height,
            top:    textCoords.top + window.scrollY,
            left:   textCoords.left + window.scrollX
        };
    
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }


    // const text = this.children[2];
    // text.style.setProperty('display', 'block');
    // const textCoords = text.getBoundingClientRect();
    // const coords = {
    //     width:  textCoords.width,
    //     height: textCoords.height,
    //     top:    textCoords.top + window.scrollY,
    //     left:   textCoords.left + window.scrollX
    // };  

    // console.log(textCoords);
    // // console.log(cardCoords);

    // // highlight.style.width = `${textCords.width}px`;
    // // highlight.style.height = `${textCords.height}px`;
    // // highlight.style.transform = `translate(${textCords.left}px, ${textCords.top}px)`;

    // highlight.style.width = `${coords.width}px`;
    // highlight.style.height = `${coords.height}px`;
    // highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;


}

function blindElement() {
    infoButton.classList.remove('disable');

    const photo = this.children[0];
    const header = this.children[1];
    const text = this.children[2];
    // text.style.setProperty('display', 'none');
    // highlight.style.setProperty('display', 'none');
    photo.style.setProperty('transform', 'translate(-50%) scale(1)');
    header.classList.remove('highlight');
    text.classList.remove('active', 'active-enter') || highlight.classList.remove('active-enter');
    
    if (this.children[3] != undefined) {
        const body = this.children[3];   
        body.classList.remove('active', 'active-enter');
    }
}

cards.forEach(card => card.addEventListener('mouseenter', highlightElement));
cards.forEach(card => card.addEventListener('mouseleave', blindElement));
