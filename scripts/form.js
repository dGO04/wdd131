const products = document.querySelector('#pName')
const year = document.querySelector('#currentYear')
const lastModification = document.querySelector('#lastModification')
const today = new Date();
const reviewForm = document.querySelector('form')
let submittedForms = JSON.parse(localStorage.getItem('submittedForms')) || 0
const reviewsCount = document.querySelector('#reviewsCount')


year.textContent = today.getFullYear()
lastModification.textContent = `Last Modification: ${document.lastModified}`

//It will only load the products if its in the 'form.html' Page
if (products != null) {
    const productsObj = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

    productsObj.forEach((productObj)=> {

    product = document.createElement('option')
    product.textContent = productObj.name
    product.value = productObj.id

    products.appendChild(product)
      
  })  

    reviewForm.addEventListener('submit', (e) => {
      submittedForms += 1
      submittedForms = JSON.stringify(submittedForms)
      localStorage.setItem('submittedForms', submittedForms)
    })

}

if (reviewsCount != null) {
  reviewsCount.textContent = submittedForms;
}
