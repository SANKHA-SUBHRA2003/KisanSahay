const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('.tab');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove active class from all tabs and buttons
        tabs.forEach(tab => tab.classList.remove('active'));
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button and corresponding tab
        button.classList.add('active');
        tabs[index].classList.add('active');
    });
});