const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  console.log("Menu icon clicked"); // Logs when the menu icon is clicked

  // Toggle the menu visibility
  mobileMenu.classList.toggle("open");
  console.log("Mobile menu class list:", mobileMenu.classList); // Logs current classes on mobile menu

  // Toggle the animation for the menu icon
  menuToggle.classList.toggle("open");
  console.log("Menu icon class list:", menuToggle.classList); // Logs current classes on menu icon
});





// home page slider 

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}
