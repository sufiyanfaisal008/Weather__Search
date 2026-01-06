async function serach(event) {
    event.preventDefault();
    let cityname = document.querySelector("#cityname").value
    console.log(cityname)

    let api_key = "95b9051ababbfcd9d8ffcf9fba30bd61"

    const wether = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${api_key}&unit=metrics`)

    console.log(wether);

    const timezone = wether.data.city.timezone
    const timezonepk = timezone - 6

    const kelvin = wether.data.list[0].main.temp
    const calsi = kelvin - 273.15

    document.querySelector(".Country").innerHTML = " Country : " + wether.data.city.country
    document.querySelector(".city").innerHTML = " City :  " + wether.data.city.name
    document.querySelector(".population").innerHTML = " Population :  " + wether.data.city.population
    document.querySelector(".temp").innerHTML = "Temp :  " + calsi.toFixed(0) + "°C"
    document.querySelector(".time").innerHTML = "Timezone :  " + timezonepk
    document.querySelector(".pressure").innerHTML = "Pressure :  " + wether.data.list[0].main.pressure + " hpa"
    document.querySelector(".humidity").innerHTML = "Humidity :  " + wether.data.list[0].main.humidity 
    
    document.querySelector(".sea_level").innerHTML = "sea_level :  " + wether.data.list[0].main.sea_level 
    
}  