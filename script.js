let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let cards = document.querySelectorAll('.cards .card');

let countItem = items.length;
let itemActive = 0;

let autoSlide = setInterval(() => {
        next.click();
        showSlider();
    }, 3000);

next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1
    }

    showSlider()
}

function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let cardActiveOld = document.querySelector('.cards .card.active');
    itemActiveOld.classList.remove('active');
    cardActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    cards[itemActive].classList.add('active');

    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        next.click();
        showSlider();
    }, 3000);
}


cards.forEach((card, index) => {
    card.onclick = function () {
        itemActive = index;
        showSlider();
    }
})
