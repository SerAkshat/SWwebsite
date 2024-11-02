document.addEventListener('DOMContentLoaded', () => {
    // Initialize Foundation (if still needed)
    if (typeof $ !== 'undefined' && typeof $(document).foundation === 'function') {
        $(document).foundation();
    }

    // Navigation Scroll
    const navLinks = document.querySelectorAll('#section-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Ensure Navigation is hidden initially
    document.getElementById('section-nav').style.opacity = '0';

    // Initialize Swiper for each image slider
    const sliders = document.querySelectorAll('.swiper');
    sliders.forEach((slider) => {
        const sliderId = '#' + slider.getAttribute('id');
        new Swiper(sliderId, {
            loop: false,
            navigation: {
                nextEl: `${sliderId} .swiper-button-next`,
                prevEl: `${sliderId} .swiper-button-prev`,
            },
            pagination: {
                el: `${sliderId} .swiper-pagination`,
                clickable: true,
            },
            simulateTouch: true,
            grabCursor: true,
        });
    });

    // Collapse the navbar when a link is clicked (on mobile screens)
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarItems = document.querySelectorAll('.navbar-nav .nav-link');
    
    navbarItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const collapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                collapse.hide();
            }
        });
    });
});
