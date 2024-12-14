let themeContainer = document.querySelector('#container');
// let overlay = document.createElement('div');
// overlay.classList.add('overlay');
// document.body.appendChild(overlay);
const cookies = document.querySelector('.cookies-agreement');
const cookiesBtn = document.querySelector('.cookies-button');
const whiteBtn = document.querySelector('.white-Btn');
const blackBtn = document.querySelector('.black-Btn');
const arrow = document.querySelector('.arrow-up');
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let submitButton = document.querySelector('.submit-button');

whiteBtn.addEventListener('click', function() {
    themeContainer.classList.remove('whiteTheme');
    themeContainer.classList.add('blackTheme');
});

blackBtn.addEventListener('click', function() {
    themeContainer.classList.remove('blackTheme');
    themeContainer.classList.add('whiteTheme');
})

function commentInit(evt) {
    evt.preventDefault();
    let liElement = document.createElement('li');
    liElement.classList.add('user-comment');
    liElement.textContent = evt.target.commentField.value;
    commentList.appendChild(liElement);
    evt.target.commentField.value = "";
}

commentForm.addEventListener('submit', commentInit);

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
    }
});  

// cookiesBtn.addEventListener('click', function() {
//     document.body.remove(overlay);
//     cookies.classList.add('cookies-agreement-closed');

//     localStorage.setItem('cookiesAccepted', 'true');
// });

// if (localStorage.getItem('cookiesAccepted') === 'true') {
//     overlay.classList.remove('overlay'); 
//     cookies.classList.add('cookies-agreement-closed');
// }