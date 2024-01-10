let currentIndex = 0;
const intervalDuration = 10000; 

function showSlide(index) {
  const testimonialCarousel = document.getElementById('testimonialCarousel');
  const testimonials = document.querySelectorAll('.testimonial');
  const slideWidth = testimonials[0].offsetWidth;
  const newPosition = -index * slideWidth;
  testimonialCarousel.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.testimonial').length;
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.testimonial').length;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

function startCarousel() {
  setInterval(nextSlide, intervalDuration);
}


window.addEventListener('load', startCarousel);

// Gallery carousel

let currentSlide = 0;

function showGallerySlide(index) {
  const slides = document.querySelector('.carousel');
  const totalSlides = slides.children.length;

  currentSlide = (index + totalSlides) % totalSlides;

  for (let i = 0; i < totalSlides; i++) {
    slides.children[i].style.display = 'none';
  }

  slides.children[currentSlide].style.display = 'block';
}

function changeSlide(direction) {
  showGallerySlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.carousel');
  const totalSlides = slides.children.length;

  
  for (let i = 0; i < totalSlides; i++) {
    slides.children[i].style.display = 'none';
  }

  showGallerySlide(currentSlide);
});



function openModal(imageSrc, description) {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalText = document.getElementById('modal-text');

  modalImage.src = imageSrc;
  modalText.textContent = description;

  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}


window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};







// Accreditation
console.log("Made by SolwayWeb");
