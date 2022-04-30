/*******************     / بسم الله الرحمن الرحيم /     ****************/
const cards = document.querySelectorAll('.card');
const newColors = document.querySelector('.new-colors');
const rgbTitle = document.querySelector('.text-color-random');
const bgTop = document.querySelector(".section-top .bg");
const easy = document.querySelector('.easy');
const hard = document.querySelector('.hard');
const colors = [];
window.onload = changeColors();
newColors.addEventListener('click', changeColors);

newColors.onclick = function () {
    return window.location.reload();
}
hard.onclick = () => {
    window.location.reload();
};
function changeColors() {
    for (i = 0; i < cards.length; i++) {
        const allColors = cards[i].style.backgroundColor = rgbColors();
        colors.push(allColors);
    }
    var title = rgbTitle.innerHTML = arrayOfColors();
    cards.forEach(card => {
        card.addEventListener('click', function () {
            if (title === card.style.backgroundColor) {
                const bg = card.style.backgroundColor;
                bgTop.style.backgroundColor = card.style.backgroundColor;
                for (i = 0; i < cards.length; i++) {
                    cards[i].style.backgroundColor = bg;
                    cards[i].style.opacity = "1";
                }
            }
            else {
                card.style.opacity = "0";
            }
        })
    })
}

easy.addEventListener('click', () => {
    for (i = 0; i < 3; i++) {
        cards[i].style.display = "none";
    }

    var title = rgbTitle.innerHTML = arrayOfColors();
    cards.forEach(card => {
        card.addEventListener('click', function () {
            if (title === card.style.backgroundColor) {
                const bg = card.style.backgroundColor;
                bgTop.style.backgroundColor = card.style.backgroundColor;
                for (i = 0; i < 3; i++) {
                    cards[i].style.opacity = "1";
                    cards[i].style.backgroundColor = bg;
                }
            }
            else {
                card.style.opacity = "0";
            }
        })
    })
})



function arrayOfColors() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function rgbColors() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}