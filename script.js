const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});

function openMap(imagePath) {

    const lightbox = document.getElementById("mapLightbox");
    const expandedMap = document.getElementById("expandedMap");

    expandedMap.src = imagePath;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeMap() {

    const lightbox = document.getElementById("mapLightbox");

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";
}

/* Carousel Navigation Functionality */
const carouselIndices = {};

function moveSlide(carouselId, direction) {
    const container = document.getElementById(carouselId);
    if (!container) return;

    const track = container.querySelector('.carousel-track');
    const slides = container.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    if (!(carouselId in carouselIndices)) {
        carouselIndices[carouselId] = 0;
    }

    carouselIndices[carouselId] = (carouselIndices[carouselId] + direction + totalSlides) % totalSlides;
    
    const offset = carouselIndices[carouselId] * 100;
    track.style.transform = `translateX(-${offset}%)`;
}