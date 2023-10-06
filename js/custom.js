/*

Advanced Interface Design with CSS Lab 5 Bootstrap Carousel - Christopher Blouin

*/
// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .carousel() method create the options object
const carouselCars = document.getElementById('carousel-cars');

// STEP 16: Change the interval to 5 seconds (set in milliseconds)
const carousel = new bootstrap.Carousel(carouselCars, {
    // Setting the interval of the courousel ride (autoplay) to 2 seconds. 
    interval: 2000,
    pause: false,
    touch: true,
    wrap: true,
    // Setting the keyboard event to false, which will disable keyboard navigation completely. 
    keyboard: false
});


// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding - by adding a class when the slide has finished animating, and removing it when it begins
carouselCars.addEventListener('slid.bs.carousel', () => {
    // The the .zoomit class
    carouselCars.classList.add('zoomit');
});

// Once the animation is played, remove the zoomit class so that it can be added back on each image slide. 
carouselCars.addEventListener('slide.bs.carousel', () => {
    // The the .zoomit class
    carouselCars.classList.remove('zoomit');
});


