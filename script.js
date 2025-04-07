document.addEventListener("DOMContentLoaded", function () {
    // Menu Bar Toggle Functionality
    let menuBar = document.getElementById("menu-bar");
    let navLinks = document.querySelector(".nav-links");

    if (menuBar && navLinks) {
        menuBar.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Swiper Slider
    var homeSwiper = new Swiper(".home-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
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

    // Back to Top Button
    let mybutton = document.getElementById("backToTop");

    if (mybutton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 100) {
                mybutton.style.display = "flex"; 
            } else {
                mybutton.style.display = "none"; 
            }
        });

        mybutton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Navbar Toggle
    let menu = document.querySelector("#menu-bar");
    let head = document.querySelector(".head .navbar");

    if (menu && head) {
        menu.onclick = () => {
            head.classList.toggle("active");
        };

        let scrollTimeout;
        window.onscroll = function () {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                head.classList.remove("active");
                if (window.scrollY > 60) {
                    menu.classList.add("active");
                } else {
                    menu.classList.remove("active");
                }
            }, 100);
        };

        document.addEventListener("click", (e) => {
            if (!menu.contains(e.target) && !head.contains(e.target)) {
                head.classList.remove("active");
            }
        });
    }
});

function toggleMoreServices() {
    const hiddenServices = document.querySelectorAll('.hidden');
    hiddenServices.forEach(service => {
        service.classList.remove('hidden');
    });

    const viewAllBtn = document.querySelector('.view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.style.display = 'none';
    }
}

function redirectToContact(serviceName) {
    window.location.href = `contact.html?service=${encodeURIComponent(serviceName)}`;
}
