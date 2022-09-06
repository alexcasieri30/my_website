import './index.scss';

let submit = document.getElementById("submit");
let input_city = document.getElementById("city");
let showtemp = document.getElementById("temperature");
let temp_info = document.querySelector(".temp-info");

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

    console.log('BODY: ', body);
    let wind_container = document.querySelector(".wind-info");
    let titles = document.querySelectorAll(".title");
    let error = document.querySelector(".error_message");
    error.innerHTML = "There was an error in your search: ";
    error.classList.add("hidden");
    let tempinfo = document.querySelector(".temp-info");
    tempinfo.classList.remove("hidden");
    let windinfo = document.querySelector(".wind-info");
    windinfo.classList.remove("hidden");
    for (let i = 0; i < titles.length; i++){
        titles[i].classList.remove('hidden');
    }
    let temp_f = kelvin_to_fahr(response['main']['temp']);
    let temp_max = kelvin_to_fahr(response['main']['temp_max']);
    let temp_min = kelvin_to_fahr(response['main']['temp_min']);
    temp_info.innerHTML = "Current temp: " + temp_f + '\u00B0 F';
    temp_info.innerHTML += ("<br>Max temp: " + temp_max+ '\u00B0 F<br>Min temp: ' + temp_min+ '\u00B0 F');
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
    let tempinfo = document.querySelector(".temp-info");
    tempinfo.classList.add("hidden");
    let windinfo = document.querySelector(".wind-info");
    windinfo.classList.add("hidden");
    let titles = document.querySelectorAll(".title");
    for (let i = 0; i < titles.length; i++){
        titles[i].classList.add('hidden');
    }
    let er = document.querySelector(".error_message");
    er.classList.remove("hidden");
    er.innerHTML += ("<br>"  + err);
}
const kelvin_to_fahr = function(temp){
    return (1.8 * (temp - 273) + 32).toFixed(2);
}