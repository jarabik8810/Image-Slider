const carousalSlide = document.querySelector('.carousal-slide');
const carousalImages = document.querySelectorAll('.carousal-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter

let counter = 1;
const size = carousalImages[0].clientWidth;

carousalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


// Button Listener

nextBtn.addEventListener('click', () => {
    if (counter >= carousalImages.length - 1) return;
    carousalSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carousalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carousalSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carousalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carousalSlide.addEventListener('transitionend', () => {
    if (carousalImages[counter].id === 'lastClone') {
        carousalSlide.style.transition = 'none';
        counter = carousalImages.length - 2;
        carousalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carousalImages[counter].id === 'firstClone') {
        carousalSlide.style.transition = 'none';
        counter = carousalImages.length - counter;
        carousalSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});
