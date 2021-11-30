var track = document.querySelector(".carousel-track");
var nextButton = document.querySelector(".carousel-button-right");
var prevButton = document.querySelector(".carousel-button-left");
var nav = document.querySelector(".carousel-nav");
var slides = Array.from(track.children);
var indicators = Array.from(nav.children);
var slideWidth = slides[0].getBoundingClientRect().width;

var setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

var moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
};

var updateIndicator = (currentIndicator, targetIndicator) => {
    currentIndicator.classList.remove("current-slide");
    targetIndicator.classList.add("current-slide");
}

var hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === 0) {
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove("is-hidden");
    } else if(targetIndex === slides.length - 1) {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.add("is-hidden");
    } else {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");
    }
}

prevButton.addEventListener("click", () => {
    var currentSlide = track.querySelector(".current-slide");
    var prevSlide = currentSlide.previousElementSibling;
    var currentIndicator = nav.querySelector(".current-slide");
    var prevIndicator = currentIndicator.previousElementSibling;
    var prevIndex = slides.findIndex(slide => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    updateIndicator(currentIndicator, prevIndicator);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener("click", () => {
    var currentSlide = track.querySelector(".current-slide");
    var nextSlide = currentSlide.nextElementSibling;
    var currentIndicator = nav.querySelector(".current-slide");
    var nextIndicator = currentIndicator.nextElementSibling;
    var nextIndex = slides.findIndex(slide => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    updateIndicator(currentIndicator, nextIndicator);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

nav.addEventListener("click", (e) => {
    var targetIndicator = e.target.closest("button");
    if(!targetIndicator) return;
    var currentSlide = track.querySelector(".current-slide");
    var currentIndicator = nav.querySelector(".current-slide");
    var targetIndex = indicators.findIndex(indicator => indicator === targetIndicator);
    var targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateIndicator(currentIndicator, targetIndicator);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

