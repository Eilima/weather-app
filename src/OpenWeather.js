const apiKey = ''
let cityName = 'Houston'


// (302.7 − returnedValue) × 9/5 + 32 = Farenheit
// 302.7 − returnedValue = Celcius

export async function search() {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    const data = await response.json()
    if(cityName) {
        console.log(data.main.temp)
    }
}
