// елементи
let iconMenu = document.querySelector('.img-burger');
let list = document.querySelector('.list');
let nav = document.querySelector('nav');
let header = document.querySelector('header');
let btn = document.querySelector('#filterButton');
let filterBtn = document.querySelector('#main-title');
let filterEl = document.querySelectorAll('.state-block');
let stateNews = document.querySelector('.first-link');
let stateFacts = document.querySelector('.second-link');
let stateInfo = document.querySelector('.last-link');

// бургер меню
btn.addEventListener('click', addMenu);
header.style.alignItems = 'center';
function addMenu() {
    if (list.classList.contains('active')) {
        list.classList.remove('active');
        nav.style.height = 'auto';
        btn.classList.remove('rotate');
    } else {
        list.classList.add('active');
        nav.style.height = '200px';
    }
}

// сортуавання новин
stateNews.addEventListener('click', () => {
    let filteredElements = Array.from(filterEl).filter(el => 
        el.classList.contains('facts-state') || el.classList.contains('info-state')
    );

    filteredElements.forEach(el => {
        el.style.display = 'none';
        console.log(el);
    });
});

// сортуавання фактів
stateFacts.addEventListener('click', () => {
    let filteredElements = Array.from(filterEl).filter(el => 
        el.classList.contains('news-state') || el.classList.contains('info-state')
    );

    filteredElements.forEach(el => {
        el.style.display = 'none';
        console.log(el);
    });
});

// сортуавання інформації
stateInfo.addEventListener('click', () => {
    let filteredElements = Array.from(filterEl).filter(el => 
        el.classList.contains('news-state') || el.classList.contains('facts-state')
    );

    filteredElements.forEach(el => {
        el.style.display = 'none';
        console.log(el);
    });
});


