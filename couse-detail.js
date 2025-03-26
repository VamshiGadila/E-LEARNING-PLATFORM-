document.addEventListener('DOMContentLoaded', function() {
    // Tab Switching Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle active class on header
            header.classList.toggle('active');
            
            // Get the content element
            const content = header.nextElementSibling;
            
            // Toggle content visibility
            if (header.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
            
            // Close other accordion items if needed
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = 0;
                }
            });
        });
        
        // Initialize accordion - close all except first by default
        if (!header.classList.contains('active')) {
            header.nextElementSibling.style.maxHeight = 0;
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // User Dropdown Toggle
    const userDropdown = document.querySelector('.user-dropdown');
    
    if (userDropdown) {
        userDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.querySelector('.dropdown-content').classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            userDropdown.querySelector('.dropdown-content').classList.remove('show');
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enroll Button Functionality
    const enrollButton = document.querySelector('.btn-primary');
    if (enrollButton) {
        enrollButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Here you would typically handle the enrollment process
            alert('Enrollment functionality would be implemented here!');
            // You might redirect to a checkout page or show a modal
        });
    }

    // Wishlist Button Functionality
    const wishlistButton = document.querySelector('.btn-outline');
    if (wishlistButton) {
        wishlistButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Toggle wishlist state
            this.classList.toggle('wishlisted');
            
            if (this.classList.contains('wishlisted')) {
                this.innerHTML = '<i class="fas fa-heart"></i> Added to Wishlist';
                // You would typically make an API call here to add to wishlist
            } else {
                this.innerHTML = 'Add to Wishlist';
                // You would typically make an API call here to remove from wishlist
            }
        });
    }

    // Social Share Buttons
    const socialShareButtons = document.querySelectorAll('.social-share a');
    socialShareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className.split(' ')[1];
            
            let shareUrl = '';
            const currentUrl = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            
            switch(platform) {
                case 'fa-facebook-f':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
                    break;
                case 'fa-twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}`;
                    break;
                case 'fa-linkedin-in':
                    shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${title}`;
                    break;
                case 'fa-envelope':
                    shareUrl = `mailto:?subject=${title}&body=Check out this course: ${currentUrl}`;
                    break;
            }
            
            if (platform === 'fa-envelope') {
                window.location.href = shareUrl;
            } else {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });

    // Related Courses Carousel (if you want sliding functionality)
    // This would require additional HTML structure for carousel controls
    // Here's a basic implementation:
    const courseGrid = document.querySelector('.course-grid');
    if (courseGrid) {
        let currentSlide = 0;
        const slides = Array.from(courseGrid.children);
        const slideCount = slides.length;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${100 * (i - index)}%)`;
            });
        }
        
        // Initialize
        showSlide(currentSlide);
        
        // You would add navigation buttons and event listeners here
    }

    // Review Form Submission (if you have a review form)
    const reviewForm = document.querySelector('#review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would handle the review submission
            const formData = new FormData(this);
            // Typically you would send this to your backend
            console.log('Review submitted:', Object.fromEntries(formData));
            alert('Thank you for your review!');
            this.reset();
        });
    }

    // Initialize all accordions to be closed except the first one
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        accordionItems.forEach((item, index) => {
            if (index !== 0) {
                const header = item.querySelector('.accordion-header');
                const content = item.querySelector('.accordion-content');
                header.classList.remove('active');
                content.style.maxHeight = 0;
            }
        });
    }
});

// Additional helper function for dynamic content loading
function loadCourseContent(courseId) {
    // This would typically make an API call to fetch course content
    // For demonstration, we'll use a timeout to simulate network request
    console.log(`Loading content for course ID: ${courseId}`);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: {
                    id: courseId,
                    title: "The Complete Web Development Bootcamp",
                    // ... other course data
                }
            });
        }, 500);
    });
}