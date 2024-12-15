// theme
let themeContainer = document.querySelector('#container');
const whiteBtn = document.querySelector('.white-Btn');
const blackBtn = document.querySelector('.black-Btn');

// arrow
const arrow = document.querySelector('.arrow-up');

// comment
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let submitButton = document.querySelector('.submit-button');

// theme code
whiteBtn.addEventListener('click', function() {
    themeContainer.classList.remove('whiteTheme');
    themeContainer.classList.add('blackTheme');
});

blackBtn.addEventListener('click', function() {
    themeContainer.classList.remove('blackTheme');
    themeContainer.classList.add('whiteTheme');
})
// comment code
function commentInit(evt) {
    evt.preventDefault();
    let liElement = document.createElement('li');
    liElement.classList.add('user-comment');
    liElement.textContent = evt.target.commentField.value;
    commentList.appendChild(liElement);
    evt.target.commentField.value = "";
}

commentForm.addEventListener('submit', commentInit);

// arrow code
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
    }
});  