// cookies code
let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);
const cookies = document.querySelector('.cookies-agreement');
const cookiesBtn = document.querySelector('.cookies-button');

cookiesBtn.addEventListener('click', function() {
    document.body.removeChild(overlay);
    cookies.classList.add('cookies-agreement-closed');

    // Зберегти стан прийняття cookies у localStorage 
    localStorage.setItem('cookiesAccepted', 'true');
});

// Перевірка стану прийняття cookies при завантаженні сторінки 
if (localStorage.getItem('cookiesAccepted') === 'true') { 
    overlay.classList.remove('overlay'); 
    cookies.classList.add('cookies-agreement-closed'); 
}