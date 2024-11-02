document.addEventListener('DOMContentLoaded', () => {
    // Initialize Foundation (if still needed)
    if (typeof $ !== 'undefined' && typeof $(document).foundation === 'function') {
        $(document).foundation();
    }

    // Ensure Navigation is hidden initially
    document.getElementById('section-nav').style.opacity = '0';

    // Navigation Scroll
    const navLinks = document.querySelectorAll('#section-nav a.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add smooth scroll for the navbar brand
    const navbarBrand = document.querySelector('.navbar-brand');
    navbarBrand.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = navbarBrand.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
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

    // Function to update navbar on scroll
    function updateNavbar() {
        const navbar = document.getElementById('section-nav');
        const scrollPosition = window.scrollY || window.pageYOffset;
        const homeSectionHeight = document.getElementById('home').offsetHeight;
    
        if (scrollPosition >= homeSectionHeight) {
            // User has scrolled past the home section
            navbar.classList.add('navbar-transparent');
        } else {
            // User is at the top section
            navbar.classList.remove('navbar-transparent');
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', updateNavbar);

    // Call the function on page load in case the user refreshes at a scrolled position
    updateNavbar();

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
});
