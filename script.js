const carousel = document.querySelector("#carouselExampleControls");
const items = carousel.querySelectorAll(".carousel-item");

// Set the initial slide index
let currentSlide = 0;

// Function to change the slide
function changeSlide(direction) {
  items[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + items.length) % items.length;
  items[currentSlide].classList.add("active");
}

// Automatically change slide every 2 seconds
setInterval(function() {
  changeSlide(1);
}, 4000);
var nav = document.querySelector("#nav");
console.log(nav);
window.addEventListener("scroll", function() {
    if(this.window.scrollY>80)
    {
        console.log("activated");
        nav.classList.add("sticky");
    }
    else
    {
        console.log("deactivated");
        nav.classList.remove("sticky");
    }
})
