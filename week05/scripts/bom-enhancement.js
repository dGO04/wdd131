const input = document.querySelector('#favchap')
const label = document.querySelector('label')
const button = document.querySelector('#addChapter')
const list = document.querySelector('#list')
const paragraph = document.querySelector('#errorMsg')
let chapterList = getChapterList() || [];

chapterList.forEach(chapter => {
    displayList(chapter);
})

button.addEventListener('click', (e) => {

    if (input.value.trim() !== '') {
        
        chapter = input.value

        chapterList.push(chapter);
        displayList(chapter);
        setChapterList();
        input.value = '';
        input.focus();

    } else {
        input.focus()
        paragraph.textContent = 'Chapter cannot be empty!!'
        paragraph.style.color = 'red'
    }
});

function displayList(item) {

       if (list.childElementCount <= 9) {
            const li = document.createElement('li')
            const deleteButton = document.createElement('button')

            li.textContent = item;
            label.style.color = 'black'
            deleteButton.textContent = '❌';
            deleteButton.ariaLabel = 'Delete Chapter'; //Helps the screen reading know de purpose of this button
            li.append(deleteButton);
            list.append(li);
            paragraph.textContent = ''

            deleteButton.addEventListener('click', (e) => {
            list.removeChild(li);
            input.focus();
            deleteChapter(item);
        });
        } 

    }

function setChapterList() {
    cList = JSON.stringify(chapterList);
    localStorage.setItem('myFavBOMList', cList)
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    
    chapterList.removeItem();
    setChapterList();

}

