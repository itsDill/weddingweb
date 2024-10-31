let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    const slides = document.querySelectorAll('.slideshow-container img');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % document.querySelectorAll('.slideshow-container img').length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + document.querySelectorAll('.slideshow-container img').length) % document.querySelectorAll('.slideshow-container img').length;
    showSlide(slideIndex);
}
