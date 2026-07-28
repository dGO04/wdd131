const year = document.querySelector('#currentYear');
const now = new Date();
const lastModification = document.querySelector('#lastModification')

year.textContent = now.getFullYear();
lastModification.textContent = `Last Modification: ${document.lastModified}`;