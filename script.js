document.addEventListener('DOMContentLoaded', () => {
    // Initialize Foundation (if still needed)
    $(document).foundation();

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
});
