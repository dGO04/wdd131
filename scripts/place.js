const year = document.querySelector('#currentYear')
const today = new Date()
const currentYear = today.getFullYear()
const lastModification = document.querySelector('#lastModification')
const windChill = document.querySelector('#windChill')
const windTemperature = 31
const windSpeed = 5

const calculateWindChill = (windTemperature, windSpeed) => (windTemperature <= 10 && windSpeed > 4.8) ? `${(13.12 + 0.6215 * windTemperature - 11.37 * windSpeed ** 0.16 + 0.3965 * windTemperature * windSpeed ** 0.16).toFixed(2)}°C` : 'N/A'

//Assign the current year to the span object in the footer
year.textContent =  currentYear
//Assign the last modification date to the p object in the footer
lastModification.textContent = `Last Modification: ${document.lastModified}`

windChill.textContent = `Wind Chill: ${calculateWindChill(windTemperature, windSpeed)}`