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
                title: 'Event 2',
                image: 'images/event2-banner.jpg',
                description: 'Welcome to Event 2! This event is all about speed and precision. Participants will face challenges that require quick thinking and problem-solving skills.'
            },
            {
                title: 'Event 3',
                image: 'images/event3-banner.jpg',
                description: 'Event 3 is here! Get ready for a mix of physical and mental challenges. Make sure to work closely with your teammates to secure the highest points.'
            },
            {
                title: 'Event 4',
                image: 'images/event4-banner.jpg',
                description: 'In Event 4, participants will need to demonstrate their creativity and originality. Think outside the box to impress the judges and stand out!'
            },
            {
                title: 'Event 5',
                image: 'images/event5-banner.jpg',
                description: 'Event 5 focuses on endurance and teamwork. Be prepared for activities that require both physical and strategic effort.'
            },
            {
                title: 'Event 6',
                image: 'images/event6-banner.jpg',
                description: 'The final Event 6 is all about leadership and collaboration. Make the most of your abilities and lead your team to victory!'
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
