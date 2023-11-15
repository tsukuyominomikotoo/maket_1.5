let swiper = null;
function swiperInit() {
  if (!swiper) {
    swiper = new Swiper('.swiper-1', {
      direction: 'horizontal',
      slidesPerView: 1,
      pagination: {
          el: '.swiper-pagination-1',
          clickable: true,
      },
     
    });
}

}

function swiperDestroy() {
    
  if (swiper) {
    swiper.destroy();
    swiper = null;
  }
}

let swiper2 = null;
function secondSwiperInit() {
  if (!swiper2) {
    swiper2 = new Swiper('.swiper-2', {
      direction: 'horizontal',
      slidesPerView: 1,
      pagination: {
          el: '.swiper-pagination-2',
          clickable: true,
      },
    });
  }
}

function secondSwiperDestroy() {
  if (swiper2) {
    swiper2.destroy();
    swiper2 = null;
  }
}

window.addEventListener("resize", function() {
if (window.matchMedia("(max-width: 767px)").matches) {
  swiperInit();
  secondSwiperInit();
} else{
  swiperDestroy();
}
if(window.matchMedia("(min-width:1366px)").matches){
  secondSwiperDestroy();
}
else {
  secondSwiperInit();
}
});

  let arrowSwitcher = document.querySelector('.section_arrow');
  let swiperHeight = document.querySelector('.swiper-1');
arrowSwitcher.addEventListener('click', () =>{
swiperHeight.classList.toggle('swiper_active');
arrowSwitcher.classList.toggle('arrow_rotate');

});
let burgerMenu = document.querySelector('.header__burger');
let navMenu = document.querySelector('.main__nav_menu');
let backgroundGray = document.querySelector('.main_menu_background');
let vectorForNav = document.querySelector('.nav_vector');
let body = document.querySelector('body');

burgerMenu.addEventListener('click', () => {
navMenu.classList.toggle('main__nav_menu-active');
backgroundGray.classList.toggle('main_menu_background-active');
body.classList.toggle('body_active');
});

vectorForNav.addEventListener('click', () => {
navMenu.classList.remove('main__nav_menu-active');
backgroundGray.classList.remove('main_menu_background-active');
body.classList.remove('body_active');
});
backgroundGray.addEventListener('click', () =>{
navMenu.classList.remove('main__nav_menu-active');
backgroundGray.classList.remove('main_menu_background-active');
body.classList.remove('body_active');
})
 
let menuForCall = document.querySelector('.main__menu_call-request');
let menuVector = document.querySelector('.menu_call-request-vector');
let headerButton = document.querySelector('.header__button');
let backgroundGrayMenu = document.querySelector('.main_menu_background-call');
let headerButtonDesktop = document.querySelector('.header__button_desktop');
let footerButton = document.querySelector('.footer__button');
headerButton.addEventListener('click', () =>{
menuForCall.classList.toggle('main__menu_call-request-active');
backgroundGrayMenu.classList.toggle('main_menu_background-call-active');
body.classList.toggle('body_active');

});
footerButton.addEventListener('click', () =>{
  menuForCall.classList.toggle('main__menu_call-request-active');
  backgroundGrayMenu.classList.toggle('main_menu_background-call-active');
  body.classList.toggle('body_active');
});
menuVector.addEventListener('click', () =>{
menuForCall.classList.remove('main__menu_call-request-active');
backgroundGrayMenu.classList.remove('main_menu_background-call-active');
body.classList.remove('body_active');
});

headerButtonDesktop.addEventListener('click', () =>{
  menuForCall.classList.toggle('main__menu_call-request-active');
  backgroundGrayMenu.classList.toggle('main_menu_background-call-active');
  body.classList.toggle('body_active');
  
  });

backgroundGrayMenu.addEventListener('click', () =>{
  menuForCall.classList.remove('main__menu_call-request-active');
  backgroundGrayMenu.classList.remove('main_menu_background-call-active');
  body.classList.remove('body_active');
});