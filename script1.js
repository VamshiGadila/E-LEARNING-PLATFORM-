// Pagination functionality
document.addEventListener('DOMContentLoaded', function() {
    const coursesPerPage = 6; // Change this based on how many courses you want per page
    const courseCards = document.querySelectorAll('.course-card');
    const pageNumbers = document.querySelectorAll('.page-number');
    const prevBtn = document.querySelector('.page-nav.prev');
    const nextBtn = document.querySelector('.page-nav.next');
    const ellipsis = document.querySelector('.ellipsis');
    
    let currentPage = 1;
    
    // Show courses for current page
    function showPage(page) {
        const startIndex = (page - 1) * coursesPerPage;
        const endIndex = startIndex + coursesPerPage;
        
        courseCards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update active page number
        pageNumbers.forEach(number => {
            number.classList.remove('active');
            if (number.textContent == page) {
                number.classList.add('active');
            }
        });
        
        // Show/hide ellipsis based on current page
        if (page > 3 && page < pageNumbers.length - 1) {
            ellipsis.style.display = 'block';
        } else {
            ellipsis.style.display = 'none';
        }
        
        // Enable/disable prev/next buttons
        prevBtn.classList.toggle('disabled', page === 1);
        nextBtn.classList.toggle('disabled', page === pageNumbers.length);
    }
    
    // Initialize pagination
    showPage(currentPage);
    
    // Page number click event
    pageNumbers.forEach(number => {
        number.addEventListener('click', function(e) {
            e.preventDefault();
            currentPage = parseInt(this.textContent);
            showPage(currentPage);
        });
    });
    
    // Previous button click
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });
    
    // Next button click
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage < pageNumbers.length) {
            currentPage++;
            showPage(currentPage);
        }
    });
    
    // Add disabled class styling
    const style = document.createElement('style');
    style.textContent = `
        .page-nav.disabled {
            opacity: 0.5;
            pointer-events: none;
            cursor: not-allowed;
        }
    `;
    document.head.appendChild(style);
});