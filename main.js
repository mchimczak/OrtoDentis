const navHeader = document.querySelector('.nav__header');
const main = document.querySelector('.main__img');
const headerContent = document.querySelector('.main__header__content');

window.onload = function () {

    setTimeout(() => navHeader.classList.add('active-enter'), 450);

    // var promise1 =  new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //         main.classList.add('enlarge')
    //      }, 100);
    //      setTimeout(function() {
    //         resolve (headerContent.classList.add('showing'));
    //     }, 1500);
    // });
    var promise1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            main.classList.add('enlarge')
        }, 100);
        setTimeout(function () {
            resolve(headerContent.classList.add('showing'));
        }, 1500);
    });
    promise1.then(function () {
        setTimeout(() => {
            main.style.setProperty('filter', 'none');
        }, 500);
    });
}




// NAV MENU
const page = document.querySelector('main');
const menuIcon = document.querySelector('.nav__icon');
const dropdownMenu = document.querySelector('.nav__dropdown-menu');
const menu = document.querySelector('.nav__dropdown-menu__block');
const arrow = document.querySelector('.nav__dropdown-menu__arrow');
const cross = document.querySelector('.nav__cross');
const links = document.querySelectorAll('.link');

function dropdown_toggle() {
    page.classList.toggle('blur');
    menuIcon.classList.toggle('disable');
    cross.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
    dropdownMenu.classList.toggle('active-enter')
    setTimeout(() => arrow.style.setProperty('opacity', '1'), 10);

    page.classList.contains('blur') ? page.addEventListener('click', dropdown_toggle) : page.removeEventListener('click', dropdown_toggle);

}

menuIcon.addEventListener('click', dropdown_toggle);
cross.addEventListener('click', dropdown_toggle);
links.forEach(link => link.addEventListener('click', dropdown_toggle));



// NAV LINKS HANDLER


//  BUTTONS HANDLER 
const buttons = document.querySelectorAll('.section__btn:not(#s3btn)');

buttons.forEach(button => button.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    let sectionContent = button.parentNode;
    let section = button.parentNode.parentNode;


    if (button.innerHTML === "Więcej" || sectionContent.classList.contains("section__card")) {
        window.scrollTo(0, sectionContent.offsetTop - nav.offsetHeight)
    } else {
        window.scrollTo(0, section.offsetTop - nav.offsetHeight)
        // window.scrollTo(0, button.offsetParent.offsetTop - nav.offsetHeight)
    }


    button.innerHTML === "Więcej" ? button.innerHTML = "Zwiń" : button.innerHTML = "Więcej";
    button.previousElementSibling.classList.toggle('section__content--hidden');
}));


// S3BTN EXCEPT !!!!!!!!!!1

const s3btn = document.querySelector('#s3btn');
s3btn.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    let sectionContent = s3btn.parentNode;
    let section = s3btn.parentNode.parentNode;


    if (s3btn.innerHTML === "Więcej" || sectionContent.classList.contains("section__card")) {
        window.scrollTo(0, sectionContent.offsetTop - nav.offsetHeight)
    } else {
        window.scrollTo(0, section.offsetTop - nav.offsetHeight)
        // window.scrollTo(0, s3btn.offsetParent.offsetTop - nav.offsetHeight)
    }


    s3btn.innerHTML === "Więcej" ? s3btn.innerHTML = "Zwiń" : s3btn.innerHTML = "Więcej";
    s3btn.previousElementSibling.classList.toggle('flex');
});




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
    highlight.classList.add('active-enter');
    infoButton.classList.add('disable');


    if (this.children[3] != undefined) {
        const photo = this.children[0];
        const header = this.children[1];
        const text = this.children[2];
        const info = this.children[3];
        // text.style.setProperty('display', 'block') && info.style.setProperty('display', 'block');
        window.innerWidth >= 992 ? photo.style.setProperty('transform', 'translate(-50%) scale(1.4)') : '';
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
        window.innerWidth >= 992 ? photo.style.setProperty('transform', 'translate(-50%) scale(1.4)'): '';
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
}

function blindElement() {
    infoButton.classList.remove('disable');

    const photo = this.children[0];
    const header = this.children[1];
    const text = this.children[2];
    // text.style.setProperty('display', 'none');
    // highlight.style.setProperty('display', 'none');
    window.innerWidth >= 992 ? photo.style.setProperty('transform', 'translate(-50%) scale(1)'): '';
    header.classList.remove('highlight');
    text.classList.remove('active', 'active-enter') || highlight.classList.remove('active-enter');
    
    if (this.children[3] != undefined) {
        const body = this.children[3];   
        body.classList.remove('active', 'active-enter');
    }
}

cards.forEach(card => card.addEventListener('mouseenter', highlightElement));
cards.forEach(card => card.addEventListener('mouseleave', blindElement));



// SLIDE IN SECTION__PHOTOS


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide() {
    sliderImages.forEach(sliderImage => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.offsetHeight / 2;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active-enter');
      } else {
        sliderImage.classList.remove('active-enter');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));











  function changeHeaderContent() {
      const headerContent = document.querySelector('.main__header__content > span');
      const header = document.querySelector('.main__header__content');
    

      if (window.innerWidth >= 992) {
          headerContent.innerHTML = "<p>Specjalistyczna Praktyka Stomatologiczna OrtoDentis zajmująca się leczeniem <span class='highlight' style='font-family:Istok Web', sans-serif'>ortodontycznym</span> funkcjonuje od 1994 roku.</p> <p>Do Państwa dyspozycji są nowocześnie wyposażone gabinety stomatologiczne oraz <span class='highlight' style='font-family:Istok Web', sans-serif'>pracownia RTG</span>.</p> <p>Pracujemy na najnowocześniejszych i sprawdzonych materiałach renomowanych firm ortodontycznych.</p><br><p>Zapoznaj się z naszą ofertą!</p>"
        } else {
        headerContent.innerHTML = "<p>Nowoczesne metody leczenia, profesjonalna opieka ortodontyczna i doświadczenie zbierane od ponad <span class='highlight' style='font-family:Istok Web', sans-serif'>25 lat</span>.</p><p>Zapoznaj się z naszą ofertą!</p>";
      }

  }

  changeHeaderContent();

  window.addEventListener('resize', debounce(changeHeaderContent));
