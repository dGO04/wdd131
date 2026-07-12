const currentYear = document.querySelector('#currentYear')
const lastModification = document.querySelector('#lastModification')
const hamburgerMenu = document.querySelector('#optionsMenu')
const listItem = document.querySelector('ul')

const today = new Date();
const year = today.getFullYear();

currentYear.textContent = year;
lastModification.textContent = `Last Modification: ${document.lastModified}`;

hamburgerMenu.addEventListener('click', () => {
    listItem.classList.toggle('show')
    hamburgerMenu.classList.toggle('show')
});