const input = document.querySelector('#favchap')
const label = document.querySelector('label')
const button = document.querySelector('#addChapter')
const list = document.querySelector('#list')
const paragraph = document.querySelector('#errorMsg')

button.addEventListener('click', (e) => {

    if (input.value.trim() !== '') {

       if (list.childElementCount <= 9) {
            const li = document.createElement('li')
            const deleteButton = document.createElement('button')

            li.textContent = input.value;
            label.style.color = 'black'
            deleteButton.textContent = '❌';
            deleteButton.ariaLabel = 'Delete Chapter'; //Helps the screen reading know de purpose of this button
            li.append(deleteButton);
            list.append(li);
            input.value = '';
            paragraph.textContent = ''

            deleteButton.addEventListener('click', (e) => {
            list.removeChild(li);
            input.focus();
        });
        } 

    } else {
        input.focus()
        paragraph.textContent = 'Chapter cannot be empty!!'
        paragraph.style.color = 'red'
    }
});

