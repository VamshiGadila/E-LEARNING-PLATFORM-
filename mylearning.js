document.addEventListener('DOMContentLoaded', function() {
    // Sample course data
    const courses = [
        {
            title: 'Web Development Bootcamp',
            progress: 65,
            category: 'in-progress',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
            duration: '42 hours',
            lessons: '56 lectures'
        },
        {
            title: 'Python for Data Science',
            progress: 100,
            category: 'completed',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
            duration: '36 hours',
            lessons: '42 lectures'
        },
        // Add more sample courses...
    ];

    const courseGrid = document.querySelector('.course-grid');
    const tabButtons = document.querySelectorAll('.tab-btn');

    // Function to populate courses
    function populateCourses(filter = 'all') {
        courseGrid.innerHTML = '';
        const filteredCourses = filter === 'all' ? 
            courses : 
            courses.filter(course => course.category === filter);

        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'learning-course-card';
            courseCard.innerHTML = `
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}">
                    <div class="progress-bar">
                        <div>${course.progress}% Complete</div>
                        <div class="progress" style="width: ${course.progress}%"></div>
                    </div>
                </div>
                <div class="course-info">
                    <h3>${course.title}</h3>
                    <div class="course-meta">
                        <span><i class="fas fa-video"></i> ${course.lessons}</span>
                        <span><i class="fas fa-clock"></i> ${course.duration}</span>
                    </div>
                </div>
            `;
            courseGrid.appendChild(courseCard);
        });
    }

    // Tab functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.dataset.tab;
            populateCourses(filter);
        });
    });

    // Initial load
    populateCourses();

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
});