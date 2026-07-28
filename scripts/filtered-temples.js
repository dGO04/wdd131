const currentYear = document.querySelector('#currentYear')
const lastModification = document.querySelector('#lastModification')
const hamburgerMenu = document.querySelector('#optionsMenu')
const listItem = document.querySelector('ul')
const photosAlbum = document.querySelector('#photosAlbum')

const homeButton = document.querySelector('#home')
const oldButton = document.querySelector('#old')
const newButton = document.querySelector('#new')
const largeButton = document.querySelector('#large')
const smallButton = document.querySelector('#small')

const today = new Date();
const year = today.getFullYear();

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://wsrv.nl/?url=https://www.churchofjesuschrist.org/imgs/c6b3cf4bce3e1adb39d332032cb27b2705fe5719/full/!400,/0/default"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://wsrv.nl/?url=https://www.churchofjesuschrist.org/imgs/c58240fa8ae72aac6b1985ba0ffb878021b38946/full/!400,/0/default"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://wsrv.nl/?url=https://www.churchofjesuschrist.org/imgs/1a2b3f38922ebe5a9f01dba74003bb9a0e378b44/full/!400,/0/default"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://wsrv.nl/?url=https://www.churchofjesuschrist.org/imgs/a5d78c6ebcfc11eca9f5eeeeac1e18e3678a27fa/full/!400,/0/default"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://wsrv.nl/?url=https://www.churchofjesuschrist.org/imgs/bd4ce0224ee48cbbf067a262a9c1d327cd6431c2/full/!400,/0/default"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://wsrv.nl/?url=https://www.churchofjesuschrist.org/imgs/efbc0fc1288c143db2d6bf4aea7ea482b0e0a67c/full/!400,/0/default"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://wsrv.nl/?url=https://www.churchofjesuschrist.org/imgs/a2c81ab1956b983c300ff765bb405a5f97d64b20/full/!400,/0/default"
  },
  {
    templeName: "Kansas City Missouri",
    location: "Kansas City, Missouri, United States",
    dedicated: "2012, May, 6",
    area: 32000, 
    imageUrl: 
    "https://wsrv.nl/?url=https://www.churchofjesuschrist.org/imgs/5ec1f6e9b3ee7177d1c7abd1101ac44b96c1f87e/full/!400,/0/default"
  },
  {
    templeName: "Casper Wyoming",
    location: "Casper, Wyoming, United States", 
    dedicated: "2024, November, 24",
    area: 9950,
    imageUrl: 
    "https://wsrv.nl/?url=https://www.churchofjesuschrist.org/imgs/947193ecc5e811ee8b06eeeeac1e0469503f7dad/full/!400,/0/default"
  },
  {
    templeName: "Copenhagen Denmark",
    location: "Frederiksberg, Denmark",
    dedicated: "2004, May, 23",
    area: 25000,
    imageUrl: 
    "https://wsrv.nl/?url=https://www.churchofjesuschrist.org/imgs/327d372c89e0e01fc2ea425649f8573023346fed/full/!400,/0/default"
  },
];

homeButton.addEventListener('click', () => {

    generateTemples(temples)
})

oldButton.addEventListener('click', () => {
    templeList = temples.filter((temple) => {
        dedicationDate = temple.dedicated
        templeDetails = dedicationDate.split(', ')
        dedicationYear = templeDetails[0]

        return dedicationYear < 1900
    })

    generateTemples(templeList)
})

newButton.addEventListener('click', () => {
    templeList = temples.filter((temple) => {
        dedicationDate = temple.dedicated
        templeDetails = dedicationDate.split(', ')
        dedicationYear = templeDetails[0]

        return dedicationYear > 2000
    })

    generateTemples(templeList)
})

largeButton.addEventListener('click', () => {
    templeList = temples.filter((temple) => {
        templeArea = temple.area

        return templeArea > 90000
    })

    generateTemples(templeList)
})

smallButton.addEventListener('click', () => {
    templeList = temples.filter((temple) => {
        templeArea = temple.area

        return templeArea < 10000
    })

    generateTemples(templeList)
})

generateTemples(temples)

function generateTemples(templeList) {

    document.querySelector('#photosAlbum').innerHTML = ''
    templeList.forEach((card)=> {
        const figure = document.createElement('figure')
        const figcaption = document.createElement('figcaption')
        const title = document.createElement('h2')
        const location = document.createElement('p')
        const dedication = document.createElement('p')
        const size = document.createElement('p')
        const image = document.createElement('img')
        const imgFrame = document.createElement('picture')

        figcaption.appendChild(title)
        figcaption.appendChild(location)
        figcaption.appendChild(dedication)
        figcaption.appendChild(size)

        imgFrame.appendChild(image)
        figure.appendChild(figcaption)
        figure.appendChild(imgFrame)
        photosAlbum.appendChild(figure)

        title.textContent = card.templeName
        location.textContent = `Location: ${card.location}`
        dedication.textContent = `Dedicated: ${card.dedicated}`
        size.textContent = `Size: ${card.area} sq ft`
        image.src = card.imageUrl
        image.loading = 'lazy'
        image.alt = `Landscape view of The ${card.templeName} Temple from The Church of Jesus Christ LDS`

        figure.classList.add('albumPhoto')   
})}

currentYear.textContent = year;
lastModification.textContent = `Last Modification: ${document.lastModified}`;

hamburgerMenu.addEventListener('click', () => {
    listItem.classList.toggle('show')
    hamburgerMenu.classList.toggle('show')
});