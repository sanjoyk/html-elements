let slideIndex = 0;


const showSlides = () => {
    let i = 0;
    slideIndex += 1;
    let slides = document.getElementsByClassName('my-slides');

    if (slideIndex >= slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
};

setInterval(showSlides, 2000);
