import './index.scss';

let submit = document.getElementById("submit");
let input_city = document.getElementById("city");
let showtemp = document.getElementById("temperature");
let temp_info = document.querySelector(".temp-info-temp");
let main_info = document.querySelector(".temp-info-main");

if (submit != null){
    submit.onclick = function(){
        let city = input_city.value;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14986964fe678492a0c5c8e2678325b4`;
        fetch(url, {
            mode: 'cors'
        }).then(function(response) {
            return response.json();
        })
        .then(function(response){
            console.log(response);
            handle_response_data(response);
        })
        .catch(function(err) {
            handle_error(err);
        });
        console.log('working');
    }
}

const handle_response_data = function(response){
    let body = document.getElementById('weather-body');
    let sunrise_title = document.querySelector(".sunrise-title")
    sunrise_title.classList.remove('hidden');
    let sunset_title = document.querySelector(".sunset-title")
    sunset_title.classList.remove("hidden");
    let maininfo = document.querySelector(".temp-info-main");
    maininfo.classList.remove("hidden");
    console.log('BODY: ', body);
    let wind_container = document.querySelector(".wind-info");
    let extra_container = document.querySelector(".extra-info");

    let error = document.querySelector(".error_message");
    error.innerHTML = "There was an error in your search: ";
    error.classList.add("hidden");
    let tempinfo = document.querySelector(".temp-info-temp");
    tempinfo.classList.remove("hidden");
    let windinfo = document.querySelector(".wind-info");
    windinfo.classList.remove("hidden");
    let temp_title = document.querySelector(".temperature-title");
    let main_weather = document.querySelector(".temperature-title-main-weather");
    let temp_wind = document.querySelector(".temperature-wind-speed");
    let temp_other = document.querySelector(".temperature-other");
    let all_titles = [temp_title, main_weather, temp_wind, temp_other]
    for (let i = 0; i < all_titles.length; i++){
        all_titles[i].classList.remove('hidden');
    }
    let temp_f = kelvin_to_fahr(response['main']['temp']);
    let temp_max = kelvin_to_fahr(response['main']['temp_max']);
    let temp_min = kelvin_to_fahr(response['main']['temp_min']);
    temp_info.innerHTML = "Current temp: " + temp_f + '\u00B0 F';
    temp_info.innerHTML += ("<br>Max temp: " + temp_max+ '\u00B0 F<br>Min temp: ' + temp_min+ '\u00B0 F');

    let description = response['weather'][0]['main'];
    main_info.innerHTML = description;

    let feels_like = response['main']['feels_like'];
    let humidity = response['main']['humidity'];
    let pressure = response['main']['pressure'];
    extra_container.innerHTML = "<br/>Feels like: " + feels_like;
    extra_container.innerHTML += "<br/>Humidity: " + humidity;
    extra_container.innerHTML += "<br/>Pressure: " + pressure;
    
    let sunrise = response['sys']['sunrise'];
    let sunset = response['sys']['sunset'];
    console.log(feels_like, humidity, pressure, sunrise, sunset);

    let sun = document.querySelector(".sun");
    sun.classList.remove('hidden');
    let sunrise_container = document.querySelector(".sunrise-info")
    let sunset_container = document.querySelector(".sunset-info");
    sunrise_container.innerHTML = sunrise;
    sunset_container.innerHTML = sunset;

    let sun_title = document.querySelector(".sun-title")
    let other_containers = [sun_title,wind_container, extra_container, sunset_container, sunrise_container]
    for (let i = 0; i < other_containers.length; i++){
        other_containers[i].classList.remove("hidden");
    }
    if (temp_f > 80.0){
        body.classList.remove("cold");
        body.classList.remove("rainy");
        body.classList.remove("kindof-sunny");
        body.classList.add("sunny");
    } else if (temp_f > 32){
        body.classList.remove("cold");
        body.classList.remove("rainy");
        body.classList.remove("sunny");
        body.classList.add("kindof-sunny");
    } else {
        body['background-image'] = 'url("./images/cold")';
        body.classList.add("cold");
    }
    let wind_speed = response['wind']['speed'];
    wind_container.innerHTML = "<br>" + wind_speed + ' mph'
    
}
const handle_error = function(err){
    console.log(err);
    let tempinfo = document.querySelector(".temp-info-temp");
    let windinfo = document.querySelector(".wind-info");
    let maininfo = document.querySelector(".temp-info-main");
    let sunrise_title = document.querySelector(".sunrise-title")
    let sunset_title = document.querySelector(".sunset-title")
    let wind_container = document.querySelector(".wind-info");
    let extra_container = document.querySelector(".extra-info");
    let sunrise_container = document.querySelector(".sunrise-info")
    let sunset_container = document.querySelector(".sunset-info");
    let other_containers = [sunset_title, sunrise_title, tempinfo, windinfo, maininfo,wind_container, extra_container, sunset_container, sunrise_container]
    for (let i = 0; i < other_containers.length; i++){
        other_containers[i].classList.add("hidden");
    }

    let temp_title = document.querySelector(".temperature-title");
    let main_weather = document.querySelector(".temperature-title-main-weather");
    let temp_wind = document.querySelector(".temperature-wind-speed");
    let temp_other = document.querySelector(".temperature-other");
    let all_titles = [temp_title, main_weather, temp_wind, temp_other]
    for (let i = 0; i < all_titles.length; i++){
        all_titles[i].classList.add('hidden');
    }
    let er = document.querySelector(".error_message");
    er.classList.remove("hidden");
    er.innerHTML += ("<br>"  + err);
}
const kelvin_to_fahr = function(temp){
    return (1.8 * (temp - 273) + 32).toFixed(2);
}