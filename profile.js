document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        {
            title: 'Advanced JavaScript',
            progress: 65,
            image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a',
            instructor: 'Sarah Johnson'
        },
    ];

    const courseList = document.querySelector('.course-list');
    
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <div class="course-info">
                <h4>${course.title}</h4>
                <p>${course.instructor}</p>
                <div class="progress">
                    <div class="progress-bar" style="width: ${course.progress}%"></div>
                </div>
                <span>${course.progress}% Complete</span>
            </div>
        `;
        courseList.appendChild(courseItem);
    });

    
    const editBtn = document.querySelector('.btn-edit');
    editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        console.log('Edit profile clicked');
    });
});