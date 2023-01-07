document.addEventListener('DOMContentLoaded', function () {
	
    const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll(`.nav-link`)
	const navList = document.querySelector(`.navbar-collapse`)

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}
    
allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))



    window.addEventListener('scroll', addShadow)

})

// portfolio mobile //

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot-circle");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-dot";

  
}

