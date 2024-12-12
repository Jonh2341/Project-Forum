let iconMenu = document.querySelector('.img-burger');
let list = document.querySelector('.list');
let nav = document.querySelector('nav');
let header = document.querySelector('header');
let btn = document.querySelector('button');

btn.addEventListener('click', addMenu);
header.style.alignItems = 'center';
function addMenu() {
    if (list.classList.contains('active')) {
        list.classList.remove('active');
        iconMenu.src = '../img/opening.jpg';
        nav.style.height = 'auto';
        header.style.alignItems = 'center';
        btn.classList.remove('rotate');
    } else {
        list.classList.add('active');
        iconMenu.src = '../img/closening.jpg';
        nav.style.height = '100vh';
        header.style.alignItems = 'flex-start';
        btn.classList.add('rotate');
    }
}
