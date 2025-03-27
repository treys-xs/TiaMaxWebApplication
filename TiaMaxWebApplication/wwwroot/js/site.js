const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const mobileContent = document.querySelector('.mobile__content');
const mobile_content_main = document.querySelector('.mobile_content_main');

menuBtn.addEventListener('click', () => {
   menu.classList.toggle('menu--open');
   mobileContent.classList.toggle('blure--content');
});

mobile_content_main.addEventListener('click', () => {
   console.log(1);
   if (menu.classList.contains('menu--open')) {
      menu.classList.toggle('menu--open');
      mobileContent.classList.toggle('blure--content');
   }
});