// Navigation Section

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});


// Slider Section

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Enquiry Form Section
const formOpenBtn = document.querySelector("#form-open");
const formCloseBtn = document.querySelector("#form-close");
const popupForm = document.querySelector("#popupForm");

// When the user click the button, show the popup
formOpenBtn.addEventListener("click", (event) => {
    event.preventDefault();
    popupForm.style.display = "block";
});

// When the user clicks the close button or outside the form, close the form window
popupForm.addEventListener("click", () => {
    if(event.target.classList.contains("close") || event.target == popupForm ) {
        popupForm.style.display = "none";
    }
});



// Counter Section
function animateCounters() {
    const counters = document.querySelectorAll('.count');
    const speed = 2000; // Adjust animation speed (lower is faster)

    counters.forEach(counter => {
        const target = +counter.innerText;
        const updateCount = () => {
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Trigger counter animation when element is in viewport
document.addEventListener('DOMContentLoaded', () => {
    const counterSection = document.querySelector('.counter-section');
    const options = {
        threshold: 0.5 // Change threshold as needed
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, options);
    observer.observe(counterSection);
});