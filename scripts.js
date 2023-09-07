document.addEventListener('DOMContentLoaded', () => {
    let tabs = document.querySelectorAll('.tabs a');
    let contents = [document.querySelector('#design'), document.querySelector('#development'), document.querySelector('#maintenance')];

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide all contents
            contents.forEach(content => content.style.display = 'none');
            // Show the clicked tab's content
            contents[index].style.display = 'block';
            // Update active tab style
            tabs.forEach(innerTab => innerTab.parentElement.classList.remove('is-active'));
            tab.parentElement.classList.add('is-active');
        });
    });
});
