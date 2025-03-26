document.addEventListener('DOMContentLoaded', function() {
  
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
         
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
    const avatarInput = document.getElementById('avatar');
    const fileName = document.querySelector('.file-name');

    avatarInput.addEventListener('change', (e) => {
        if(e.target.files.length > 0) {
            fileName.textContent = e.target.files[0].name;
        }
    });

    const forms = document.querySelectorAll('.settings-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            console.log('Form submitted');
        });
    });
});