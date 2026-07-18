const year = document.querySelector('#currentYear')
const today = new Date()
const currentYear = today.getFullYear()
const lastModification = document.querySelector('#lastModification')
const windChill = document.querySelector('#windChill')
const windTemperature = 31
const windSpeed = 5

function calculateWindChill(windTemperature, windSpeed) {
    /*Calculate the wind chill only if wind temperature
    and wind speed meet the requirements
    Parameteres: 
    -windTemperature: The temperature of the wind
    -windSpeed: The speed of the wind
    Return: The temperature in degrees celcius*/
    if(windTemperature <= 10) {
        if(windSpeed > 4.8) {
            return `${(13.12 + 0.6215 * windTemperature - 11.37 * windSpeed ** 0.16 + 0.3965 * windTemperature * windSpeed ** 0.16).toFixed(2)}°C`
        } else {
            return 'N/A'
        }
    } else {
        return 'N/A'
    }
}

//Assign the current year to the span object in the footer
year.textContent =  currentYear
//Assign the last modification date to the p object in the footer
lastModification.textContent = `Last Modification: ${document.lastModified}`

windChill.textContent = `Wind Chill: ${calculateWindChill(windTemperature, windSpeed)}`