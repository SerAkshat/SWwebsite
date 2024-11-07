document.addEventListener('DOMContentLoaded', () => {
    // Initialize Foundation (if still needed)
    if (typeof $ !== 'undefined' && typeof $(document).foundation === 'function') {
        $(document).foundation();
    }

    // Navigation Scroll (for index.html)
    if (document.querySelector('#section-nav')) {
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
    }

    // Initialize Swiper for each image slider (if exists)
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

    // For the sw.html page, handle the navigation between events in a circular manner
    if (document.getElementById('event-content')) {
        const events = [
            {
                title: 'Duty',
                image: 'images/Duty-banner.jpg',
                description: 'Welcome to Duty! Here are the rules and details for this exciting challenge. Participants will engage in a series of tasks that require teamwork, strategic thinking, and creativity. Make sure to follow the instructions carefully to maximize your score!'
            },
            {
                title: 'Cartel Shootout',
                image: 'images/CS.png',
                description: 'It’s dodgeball evening as sections go head-to-head in 1v1 battles. Be there at 6:30 PM sharp to see who comes out on top. Bring your game face!'
            },
            {
                title: 'Territory Takeover',
                image: 'images/ttt.png',
                description: 'Claim your turf and conquer with every X and O – its a fast-paced fight for cartel territory!'
            },
            {
                title: 'Kudi Nu Nachne De',
                image: 'images/kudi.png',
                description: 'Step into the dance floor battlefield, where every move counts in this cartel clash for dominance!'
            },
            {
                title: 'Mural of mayhem',
                image: 'images/paint.png',
                description: 'Unleash chaos on the canvas – paint like a cartel in a frenzy and let no inch stay unmarked!'
            }
        ];

        let currentIndex = 0;

        // Elements for event updates
        const eventTitle = document.getElementById('event-title');
        const eventImage = document.getElementById('event-image');
        const eventDescription = document.getElementById('event-description');
        const leftArrow = document.getElementById('left-arrow');
        const rightArrow = document.getElementById('right-arrow');
        const enterChallengeButton = document.getElementById('enter-challenge-button');

        // Update Event Content
        function updateEvent(index) {
            eventTitle.textContent = events[index].title;
            eventImage.src = events[index].image;
            eventDescription.textContent = events[index].description;

            // Show "Enter the Challenge" button only for Event 1
            if (index === 0) {
                enterChallengeButton.classList.add('show');
            } else {
                enterChallengeButton.classList.remove('show');
            }
        }

        // Left Arrow Click (circular navigation)
        leftArrow.addEventListener('click', () => {
            if (currentIndex === 0) {
                currentIndex = events.length - 1; // Go to last event if on first event
            } else {
                currentIndex--;
            }
            updateEvent(currentIndex);
        });

        // Right Arrow Click (circular navigation)
        rightArrow.addEventListener('click', () => {
            if (currentIndex === events.length - 1) {
                currentIndex = 0; // Go to first event if on last event
            } else {
                currentIndex++;
            }
            updateEvent(currentIndex);
        });

        // Initialize with Event 1
        updateEvent(currentIndex);
    }
});
