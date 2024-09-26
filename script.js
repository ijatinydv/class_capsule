// script.js

const btechCseButton = document.getElementById('btech-cse');
const subjectSelectionDiv = document.querySelector('.subject-selection');
const contentDiv = document.querySelector('.content');

btechCseButton.addEventListener('click', () => {
    subjectSelectionDiv.style.display = 'block';
    btechCseButton.style.display = 'none';
    subjectSelectionDiv.style.transform = 'translateY(0px)';
    contentDiv.style.transform = 'translateY(-100vh)';
});

const subjectButtons = document.querySelectorAll('.subject-selection button');

subjectButtons.forEach((button) => {
    button.addEventListener('click', () => {
        contentDiv.style.display = 'block';
        subjectSelectionDiv.style.display = 'none';
        contentDiv.style.transform = 'translateY(0px)';
        subjectSelectionDiv.style.transform = 'translateY(-100vh)';
    });
});