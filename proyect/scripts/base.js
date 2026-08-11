const year = document.querySelector('#currentYear')
const lastModification = document.querySelector('#lastModification')
const main = document.querySelector('main')
const now = new Date()
const hamburgerButton = document.querySelector('#optionsMenu')
const listItem = document.querySelector('nav')
const deleteButton = document.querySelector('#delete')
const comicTitle = document.querySelector('.comicsTitle')
const placeholder = document.querySelector('.holderImgs')
const mainMyTeam = document.querySelector('#myTeamMain')
const form = document.querySelector('form')
const sendForm = document.querySelector('#submit')

year.textContent = now.getFullYear();
lastModification.textContent = `Last Modification: ${document.lastModified}`

deleteButton.addEventListener('click', (e) => {
    comicTitle.classList = 'deleteTitle'

})

hamburgerButton.addEventListener('click', (e) => {
    listItem.classList.toggle('showMenu')
    hamburgerButton.classList.toggle('showMenu')
})

const heroes = [
{
    heroName: 'Captain America', 
    smallImage: 'images/small-view-images/captain_america_small.jpg', 
    mediumImage: 'images/medium-view-images/captain_america_medium.jpg', 
    largeImage: 'images/large-view-images/captain_america_large.jpg'
},
{
    heroName: 'The Batman', 
    smallImage: 'images/small-view-images/batman_small.jpg', 
    mediumImage: 'images/medium-view-images/batman_medium.jpg', 
    largeImage: 'images/large-view-images/batman_large.jpg'
},
{
    heroName: 'The Flash', 
    smallImage: 'images/small-view-images/flash_small.jpg', 
    mediumImage: 'images/medium-view-images/flash_medium.jpg', 
    largeImage: 'images/large-view-images/flash_large.jpg'
},  
{
    heroName: 'Wonder Woman', 
    smallImage: 'images/small-view-images/wonder_woman_small.jpg', 
    mediumImage: 'images/medium-view-images/wonder_woman_medium.jpg', 
    largeImage: 'images/large-view-images/wonder_woman_large.jpg'
}, 
{
    heroName: 'Spiderman', 
    smallImage: 'images/small-view-images/spiderman_small.jpg', 
    mediumImage: 'images/medium-view-images/spiderman_medium.jpg', 
    largeImage: 'images/large-view-images/spiderman_large.jpg'
}, 
{
    heroName: 'Ironman', 
    smallImage: 'images/small-view-images/ironman_small.jpg', 
    mediumImage: 'images/medium-view-images/ironman_medium.jpg', 
    largeImage: 'images/large-view-images/ironman_large.jpg'
}, 
{
    heroName: 'Green Lantern', 
    smallImage: 'images/small-view-images/green_lantern_small.jpg', 
    mediumImage: 'images/medium-view-images/green_lantern_medium.jpg', 
    largeImage: 'images/large-view-images/green_lantern_large.jpg'
}, 
{
    heroName: 'Black Widow', 
    smallImage: 'images/small-view-images/black_widow_small.jpg', 
    mediumImage: 'images/medium-view-images/black_widow_medium.jpg', 
    largeImage: 'images/large-view-images/black_widow_large.jpg'
}, 
{
    heroName: 'Superman', 
    smallImage: 'images/small-view-images/superman_small.jpg', 
    mediumImage: 'images/medium-view-images/superman_medium.jpg', 
    largeImage: 'images/large-view-images/superman_large.jpg'
}, 
{
    heroName: 'Thor', 
    smallImage: 'images/small-view-images/thor_small.jpg', 
    mediumImage: 'images/medium-view-images/thor_medium.jpg', 
    largeImage: 'images/large-view-images/thor_large.jpg'
}
]

let myTeam = getMyTeam() || []

if (placeholder == null && form == null) {
    createHeroes(heroes)

} else {
    if (myTeam.length > 0) {
        placeholder.classList = 'hide'
        mainMyTeam.classList.remove('myTeamMain')
    }
    createHeroes(myTeam)
}

function getMyTeam() {

    team = JSON.parse(localStorage.getItem('myTeam'))

    return team;

}

function createHeroes(heroesList) {
    index = 0

//Create an element for each item in the heroes list
heroesList.forEach((hero)=> {

    const frame = document.createElement('picture')
    const image = document.createElement('img')
    const alias = document.createElement('p')
    const button = document.createElement('p')
    const sourceLarge = document.createElement('source')
    const sourceMedium = document.createElement('source')

    frame.classList.add('card') 
    
    sourceLarge.srcset = hero.largeImage
    sourceLarge.media = '(min-width: 750px)'
    sourceMedium.srcset = hero.mediumImage
    sourceMedium.media = '(min-width: 600px)'
    
    image.src = hero.smallImage
    image.alt = `${hero.heroName} superhero.`
    image.loading = "lazy"
    
    alias.id = `heroName${index}`
    alias.classList.add('heroName')
    alias.textContent = hero.heroName

    button.id = `addButton${index}`
    button.classList.add('addButton')

    frame.appendChild(sourceLarge)
    frame.appendChild(sourceMedium)
    frame.appendChild(alias)
    frame.appendChild(image)
    frame.appendChild(button)

    main.appendChild(frame)

    index += 1

})
}

const album = document.querySelector('main')

album.addEventListener('mouseover', (e) => {

    picture = e.target.closest('picture')

    if (!picture) return;

    heroName = picture.querySelector('.heroName')
    button = picture.querySelector('.addButton')

    heroName.classList.toggle('show')
    button.classList.toggle('show')

    if (placeholder == null) {
        button.textContent = '+'
    
    } else {
        button.textContent = '-'
    }

})

album.addEventListener('mouseout', (e) => {

    picture = e.target.closest('picture')

    if (!picture) return;

    heroName = picture.querySelector('.heroName')
    button = picture.querySelector('.addButton')

    heroName.classList.toggle('show')
    button.classList.toggle('show')

})

album.addEventListener('click', (e) => {

    if (e.target.textContent === '+') {

        picture = e.target.closest('picture')
        heroAlias = picture.querySelector('.heroName')
        heroInfo = ''
        
        heroes.forEach((hero) => {

        if (hero.heroName === heroAlias.textContent) {
            heroInfo = hero
            }
        })
        
        myTeam.push(heroInfo)
        console.log(myTeam)
        localStorage.setItem('myTeam', JSON.stringify(myTeam))
    }

    if (e.target.textContent === '-') {

        picture = e.target.closest('picture')
        heroAlias = picture.querySelector('.heroName')

        heroes.forEach((hero) => {
            if (hero.heroName === heroAlias.textContent) {
                
                myTeam = myTeam.filter(item => item.heroName != hero.heroName)

                }
            })
        
        localStorage.setItem('myTeam', JSON.stringify(myTeam))
        mainMyTeam.removeChild(picture)
        
    } 

    if (e.target.value === 'Request Trivia') {

        const form = e.target.closest('form')
        const comicsList = form.querySelector('#comicsList')
        const otherComic = form.querySelector('#otherComic')

        if (otherComic.value != '') {
            comicsList.required = false
        }

    }

})