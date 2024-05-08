// Preloader Section
// let loader = document.querySelector(".preloader");
//     window.addEventListener("load", () => {
//     loader.style.display = "none";
// })

// Navigation Section

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});


// Slider Section

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //     delay: 5500,
    //     disableOnInteraction: false,
    // },
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
    const counter = document.querySelectorAll(".count");
    let speed = 50;

    counter.forEach((countVal) => {
        let initVal = +countVal.textContent;
        let targetVal = countVal.dataset.val;
        let countSpeed = Math.floor(targetVal / speed);

        const updateCounter = () => {
            initVal += countSpeed;
            countVal.textContent = initVal;

            if (initVal < targetVal) {
                setTimeout(() => {
                    updateCounter();
                }, 10)
            }
        }
        updateCounter();
    });
}


// Trigger counter when it is in the view portt
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


// Scroll to top button

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    const navSection = document.querySelector(".upper-nav-bar");

    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }

    scrollToTopBtn.addEventListener("click", () => {
        navSection.scrollIntoView({ behavior: "smooth" });
    });
}