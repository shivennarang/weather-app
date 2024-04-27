function getTime() {
  let currDate = new Date();
  let hrs = currDate.getHours();
  let mins = currDate.getMinutes();

  let ampm = hrs >= 12 ? "PM" : "AM";
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12; //midnight case
  mins = mins < 10 ? "0" + mins : mins;

  document.getElementById("time").innerHTML = `${hrs} : ${mins} ${ampm}`;
}
window.onload = getTime();
setInterval(() => {
  getTime();
}, 1000);

(function () {
  function formatDate() {
    const currdate = new Date();
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const weekday = weekdays[currdate.getDay()];
    const day = currdate.getDate();
    const month = months[currdate.getMonth()];
    const year = currdate.getFullYear();

    document.getElementById(
      "date"
    ).innerHTML = `${weekday}, ${day} ${month}, ${year}`;

    document.getElementById("today_date").innerHTML = `Today, ${day} ${month}`;
  }

  formatDate();
})();
window.onload=light();
function dark() {
  const light = document.getElementById("light");
  light.classList.remove("togglebtn");
  light.classList.add("text-black-50");
  const dark = document.getElementById("dark");
  dark.classList.add("togglebtn");
  dark.classList.add("text-light");
  light.classList.remove('text-black-50')


  document.getElementById("body").classList.add("text-light");
  document.getElementById("body").style.color="#4b87ff";
  
  document.getElementById("left_back").classList.add("bg-darkB");
  document.getElementById("left_back").classList.remove("bg-lightB");

  document.getElementById("date").classList.add("text-light");
  document.getElementById("date").classList.remove("text-dark");
  document.getElementById("air").classList.add("air-dark");
  document.getElementById("air").classList.remove("air-light")
  document.getElementById("air_quality").classList.add("text-light");
  document.getElementById("air_quality").classList.remove("text-dark");
  document.getElementById("country_name").classList.add("text-light")
  document.getElementById("country_name").classList.remove("text-black-50")
  document.getElementById("air_info").classList.add("text-light")
  document.getElementById("air_info").classList.remove("text-black-50")
  document.getElementById("air_all").classList.add("text-light");
  document.getElementById("air_all").classList.add("div-effect-dark")
  document.getElementById("air_all").classList.remove("text-success");
  document.getElementById("air_all").classList.remove("div-effect-light")
  document.getElementById("sunrise_sunset").classList.add("air-dark");
  document.getElementById("sunrise_sunset").classList.remove("air-light")
  document.getElementById("sunrise_text").classList.add("text-light")
  document.getElementById("sunrise_text").classList.remove("text-dark")
  document.getElementById("sunrise_inside").classList.add("sunrise-dark");
  document.getElementById("sunrise_inside").classList.remove("sunrise-light");
  document.getElementById("sunrise_inside1").classList.add("sunrise-dark");
  document.getElementById("sunrise_inside1").classList.remove("sunrise-light");
  document.getElementById("sunrise_inside").classList.add("sunrise-dark");
  document.getElementById("addmore").classList.add("sunrise-dark");
  document.getElementById("addmore").classList.remove("sunrise-light");

  document.getElementById("right").classList.add("right-back-dark");
  document.getElementById("right").classList.remove("right-back-light");
  
  document.getElementById("search_bar").classList.add("search-dark");
  document.getElementById("search_bar").classList.remove("search-light");

  document.getElementById("search").classList.add("search-dark-text");
  document.getElementById("search").classList.remove("search-light-text");

  document.getElementById("toggle").classList.add("toggle-dark");
  document.getElementById("toggle").classList.remove("toggle-light");
  document.getElementById("toggle").classList.add("text-light");
  document.getElementById("toggle").classList.remove("text-black-50");


}

function light() {

  const light = document.getElementById("light");
  light.classList.remove("text-black-50");
  light.classList.add("togglebtn");
  light.classList.add("text-light");
  const dark = document.getElementById("dark");
  dark.classList.remove("togglebtn");
  dark.classList.remove("text-light");


  document.getElementById("body").classList.remove("text-light");
  document.getElementById("body").style.color="#4b87ff";
  
  document.getElementById("left_back").classList.remove("bg-darkB");
  document.getElementById("left_back").classList.add("bg-lightB");
  document.getElementById("date").classList.remove("text-light");
  document.getElementById("date").classList.add("text-dark");
  document.getElementById("air").classList.remove("air-dark");
  document.getElementById("air").classList.add("air-light")
  document.getElementById("air_quality").classList.remove("text-light");
  document.getElementById("air_quality").classList.add("text-dark");
  document.getElementById("country_name").classList.remove("text-light")
  document.getElementById("country_name").classList.add("text-black-50")
  document.getElementById("air_info").classList.remove("text-light")
  document.getElementById("air_info").classList.add("text-black-50")
  document.getElementById("air_all").classList.remove("text-light");
  document.getElementById("air_all").classList.remove("div-effect-dark")
  document.getElementById("air_all").classList.add("text-success");
  document.getElementById("air_all").classList.add("div-effect-light")
  document.getElementById("sunrise_sunset").classList.remove("air-dark");
  document.getElementById("sunrise_sunset").classList.add("air-light")
  document.getElementById("sunrise_text").classList.remove("text-light")
  document.getElementById("sunrise_text").classList.add("text-dark")
  document.getElementById("sunrise_inside").classList.remove("sunrise-dark");
  document.getElementById("sunrise_inside").classList.add("sunrise-light");
  document.getElementById("sunrise_inside1").classList.remove("sunrise-dark");
  document.getElementById("sunrise_inside1").classList.add("sunrise-light");
  document.getElementById("sunrise_inside").classList.remove("sunrise-dark");
  document.getElementById("addmore").classList.remove("sunrise-dark");
  document.getElementById("addmore").classList.add("sunrise-light");

  document.getElementById("right").classList.remove("right-back-dark");
  document.getElementById("right").classList.add("right-back-light");
  
  document.getElementById("search_bar").classList.remove("search-dark");
  document.getElementById("search_bar").classList.add("search-light");

  document.getElementById("search").classList.remove("search-dark-text");
  document.getElementById("search").classList.add("search-light-text");

  document.getElementById("toggle").classList.remove("toggle-dark");
  document.getElementById("toggle").classList.add("toggle-light");
  document.getElementById("toggle").classList.remove("text-light");
  document.getElementById("toggle").classList.add("text-black-50");

  

  

  
  

  
  
}

var username = "";
function changeHandler(event) {
  const username = event.target.value;
  console.log(username);
  localStorage.setItem("name", username);
}

let greeting = "";
let currDate = new Date();
let hrs = currDate.getHours();
if (hrs < 12) {
  greeting = "Morning";
}
if (hrs >= 12 && hrs <= 16) {
  greeting = "Afternoon";
}

if (hrs > 16 && hrs < 21) {
  greeting = "Evening";
}
if (hrs >= 21 && hrs <= 24) {
  greeting = "Night";
}
window.onload = function () {
  const display = localStorage.getItem("name");
  document.getElementById("name").innerHTML = `Good ${greeting}, ${
    display.charAt(0).toUpperCase() + display.slice(1)
  }`;
};

function convert_to_day(weather_date) {
  const dateString = weather_date;
  const date = new Date(dateString);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = daysOfWeek[date.getDay()];
  console.log("Day of the week:", dayOfWeek);
  return dayOfWeek;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 273.15).toFixed(2);
}


var lat;
var long;
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    async function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      console.log("Latitude:", lat);
      console.log("Longitude:", long);

      await get5DayForcast("dark");
      await airpollution();
      await sunriseAndsunsetbylatlong();
      await currentWeather();
    },
    function (error) {
      console.error("Error getting location:", error);
    }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
}

var forecast = [];
var cityname = "";
async function get5DayForcast() {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=11d420a5264d4e5a6b6f930c3c88204d`
    );
    if (!data.ok) {
      throw new Error("Failed to fetch forecast data. Please try again later.");
    }
    const resp = await data.json();
    cityname = resp.city.name;
    console.log(resp);
    forecast = resp.list.filter((weather) => {
      return weather.dt_txt.split(" ")[1] == "00:00:00";
    });

    if (forecast.length === 0) {
      throw new Error("No forecast data available for the specified location.");
    }

    const forecastContainer = document.getElementById("daysforecast");
    forecastContainer.innerHTML = "";
    forecast.forEach((item, index) => {
      const day = convert_to_day(item.dt_txt);
      const temp = fahrenheitToCelsius(item.main.temp);

      let weatherIconSrc;

      if (item.weather[0].main === "Clouds") {
        weatherIconSrc = "./assets/cloudy.png";
      } else if (item.weather[0].main === "Rain" || item.weather[0].main === "Drizzle") {
        weatherIconSrc = "./assets/rainy.png";
      } else if (item.weather[0].main === "Snow") {
        weatherIconSrc = "./assets/snowy.png";
      } else if (item.weather[0].main === "Fog") {
        weatherIconSrc = "./assets/fog.png";
      } else if (item.weather[0].main === "Thunderstrom") {
        weatherIconSrc = "./assets/thunderstrom.png";
      } else if (item.weather[0].main === "Haze") {
        weatherIconSrc = "./assets/haze.png";
      } else if (item.weather[0].main === "Mist") {
        weatherIconSrc = "./assets/mist.png";
      } else {
        weatherIconSrc = "./assets/sunny.png";
      }

      const forecastElement = document.createElement("div");
     
        forecastElement.classList.add("card-effect-light");
        forecastElement.classList.add("d-sm-flex");
        forecastElement.classList.add("flex-sm-column");
        forecastElement.classList.add("justify-content-sm-around");
        forecastElement.classList.add("align-items-sm-center");
        forecastElement.classList.add("d-flex");
        forecastElement.classList.add("flex-column");
        forecastElement.classList.add("justify-content-around");
        forecastElement.classList.add("align-items-center");
        forecastElement.classList.add("mx-auto");
        forecastElement.classList.add("mt-3");

        forecastElement.classList.add("w-50");

        
        
      forecastElement.classList.add("fw-bold");
    
      
      forecastElement.classList.add("card-hover");
      

      forecastElement.innerHTML = `
        <img src="${weatherIconSrc}" height="60%" width="60%" alt="loading">
        <div class="mt-2">${day}</div>
        <div>${temp}<sup>.</sup></div>
      `;
      forecastContainer.appendChild(forecastElement);
    });
  } catch (error) {
    console.error("Error:", error.message);
    const errorGif = document.createElement("div");
    errorGif.classList.add("d-md-flex");
    errorGif.classList.add("flex-md-row");
    errorGif.classList.add("justify-content-md-around");
    errorGif.classList.add("align-items-md-center");
    errorGif.classList.add("fs-5");
    
    errorGif.classList.add("fw-bold");
    errorGif.innerHTML = `<p>404 | Not Found</p>
    <img src="./assets/error.gif" height="70%" width="50%"/>`;

    const forecastContainer = document.getElementById("daysforecast");
    forecastContainer.innerHTML = ""; // Clear the container
    forecastContainer.appendChild(errorGif); // Append the GIF
  }
}

/*window location*/

/* on searching */
var search = "";

function searchHandler(event) {
  search = event.target.value;
  console.log(search);
}

var forecast_search = [];
var forecastElement=""

async function get5DayForcastByCountry() {
  
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=11d420a5264d4e5a6b6f930c3c88204d`
    );

    if (!data.ok) {
      throw new Error("Error fetching forecast data: " + data.statusText);
    }

    const resp = await data.json();

    forecast_search = resp.list.filter((weather) => {
      return weather.dt_txt.split(" ")[1] == "00:00:00";
    });

    console.log(forecast_search);

    const forecastContainer = document.getElementById("daysforecast");
    forecastContainer.innerHTML = "";
    forecast_search.forEach((item, index) => {
      const day = convert_to_day(item.dt_txt);
      const temp = fahrenheitToCelsius(item.main.temp);

      let weatherIconSrc;

      if (item.weather[0].main === "Clouds") {
        weatherIconSrc = "./assets/cloudy.png";
      } else if (item.weather[0].main === "Rain" || item.weather[0].main === "Drizzle") {
        weatherIconSrc = "./assets/rainy.png";
      } else if (item.weather[0].main === "Snow") {
        weatherIconSrc = "./assets/snowy.png";
      } else if (item.weather[0].main === "Fog") {
        weatherIconSrc = "./assets/fog.png";
      } else if (item.weather[0].main === "Thunderstrom") {
        weatherIconSrc = "./assets/thunderstrom.png";
      } else if (item.weather[0].main === "Haze") {
        weatherIconSrc = "./assets/haze.png";
      } else if (item.weather[0].main === "Mist") {
        weatherIconSrc = "./assets/mist.png";
      } else {
        weatherIconSrc = "./assets/sunny.png";
      }

      forecastElement = document.createElement("div");
      
        forecastElement.classList.add("card-effect-light");
        forecastElement.classList.add("col");
      forecastElement.classList.add("fw-bold");
      
      
      forecastElement.classList.add("card-hover");
      
      forecastElement.innerHTML = `
          <img src="${weatherIconSrc}" height="60%" width="60%">
          <div class="mt-2">${day}</div>
          <div>${temp}<sup>.</sup></div>
        `;
      forecastContainer.appendChild(forecastElement);
    });
  } catch (error) {
    console.error("Error:", error.message);
    const errorGif = document.createElement("div");
    errorGif.classList.add("d-flex");
    errorGif.classList.add("justify-content-around");
    errorGif.classList.add("align-items-center");
    errorGif.classList.add("fs-1");
    errorGif.classList.add("fw-bold");
    errorGif.innerHTML = `<p>404 | Not Found</p>
    <img src="./assets/error.gif" height="70%" width="50%"/>`;

    const forecastContainer = document.getElementById("daysforecast");
    forecastContainer.innerHTML = ""; // Clear the container
    forecastContainer.appendChild(errorGif); // Append the GIF
  }
}

function performSearch(event) {
  event.preventDefault();

  const forecastContainer = document.getElementById("daysforecast");
  forecastContainer.innerHTML = "";
  get5DayForcastByCountry();
  console.log("running next api");
  currentWeatherByCounntry();
}

async function airpollution() {
  const resp = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=11d420a5264d4e5a6b6f930c3c88204d`
  );
  const res = await resp.json();
  console.log(res);
  console.log(res.list[0].main.aqi);
  const aqi = res.list[0].main.aqi;
  document.getElementById("country_name").innerHTML = `${cityname}`;

  if (aqi >= 0 && aqi <= 50) {
    document.getElementById("air_type").innerHTML = "Good";
    document.getElementById("air_info").innerHTML = `Clear skies, stride-wise`;
  } else if (aqi > 50 && aqi <= 100) {
    document.getElementById("air_type").innerHTML = "Moderate";
    document.getElementById(
      "air_info"
    ).innerHTML = `Balanced air, walk with care`;
  } else if (aqi > 100 && aqi <= 150) {
    document.getElementById("air_type").innerHTML = "Unhealthy";
    document.getElementById(
      "air_info"
    ).innerHTML = `Caution in air, tread with care`;
  } else {
    document.getElementById("air_type").innerHTML = "Hazardous";
    document.getElementById(
      "air_info"
    ).innerHTML = `Air's a concern, indoor's your turn.`;
  }

  const pm2 = res.list[0].components.pm2_5;
  document.getElementById("pm2_value").innerHTML = `${pm2}`;

  const pm10 = res.list[0].components.pm10;
  document.getElementById("pm10_value").innerHTML = `${pm10}`;

  const so2 = res.list[0].components.so2;
  document.getElementById("so2_value").innerHTML = `${so2}`;

  const no2 = res.list[0].components.no2;
  document.getElementById("no2_value").innerHTML = `${no2}`;

  const o3 = res.list[0].components.o3;
  document.getElementById("o3_value").innerHTML = `${o3}`;

  const co = res.list[0].components.co;
  document.getElementById("co_value").innerHTML = `${co}`;
}

function convert() {
  const militaryTime = "18:51";

  // Extract hours and minutes from military time
  const [hours, minutes] = militaryTime.split(":").map(Number);

  // Convert military time to 12-hour format
  let period = "PM";
  let twelveHour = hours;

  if (twelveHour === 0) {
    twelveHour = 12;
  } else if (twelveHour > 12) {
    twelveHour -= 12;
  }

  const twelveHourTime = `${twelveHour}:${minutes
    .toString()
    .padStart(2, "0")} ${period}`;
  return twelveHourTime;
}

function timeConverter(UNIX_timestamp) {
  var time = new Date(UNIX_timestamp * 1000);

  var hour = time.getHours();
  var min = time.getMinutes();

  hour = hour % 12;
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;

  var time = hour + ":" + min;
  return time;
}

async function sunriseAndsunsetbylatlong() {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=11d420a5264d4e5a6b6f930c3c88204d`
  );
  const res = await data.json();
  
  console.log(res);
  document.getElementById("country_name1").innerHTML = `${cityname}`;
  const sunrise = timeConverter(res.sys.sunrise);
  document.getElementById("sunrise_time").innerHTML = `${sunrise} AM`;

  const sunset = timeConverter(res.sys.sunset);
  document.getElementById("sunset_time").innerHTML = `${sunset} PM`;

  console.log("printing forecast");
  console.log(forecast);

  const countries = [
    "United States",
    "China",
    "France",
    "Germany",
    "Spain",
    "Mexico",
    "Italy",
    "Thailand",
    "Canada",
    "New Zealand",
  ];

  const randomIndex = Math.floor(Math.random() * countries.length);
  const city_name = countries[randomIndex];
  console.log(city_name);
  const randomdata = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=11d420a5264d4e5a6b6f930c3c88204d`
  );
  const resp = await randomdata.json();
  console.log(resp);

  document.getElementById("country_namerandom").innerHTML = `${city_name}`;
  
  

  const sunrise_random = timeConverter(resp.sys.sunrise);
  document.getElementById(
    "sunrise_timerandom"
  ).innerHTML = `${sunrise_random} AM`;

  const sunset_random = timeConverter(resp.sys.sunset);
  document.getElementById(
    "sunset_timerandom"
  ).innerHTML = `${sunset_random} PM`;
}

async function addMore() {
  const country = [
    "South Korea",
    "Argentina",
    "Sweden",
    "Poland",
    "Vietnam",
    "Portugal",
    "Egypt",
    "Morocco",
    "Turkey",
    "Colombia",
  ];
  const randomIndex = Math.floor(Math.random() * country.length);
  const city_name = country[randomIndex];
  console.log(city_name);
  const randomdata = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=11d420a5264d4e5a6b6f930c3c88204d`
  );
  const resp = await randomdata.json();
  console.log(resp);
  const sunrise_random = timeConverter(resp.sys.sunrise);
  const sunset_random = timeConverter(resp.sys.sunset);
  const element = document.getElementById("addmore");
  element.innerHTML = "";
  element.classList.add("d-sm-flex");
  element.classList.add("flex-sm-column");
  element.classList.add("justify-content-sm-around");
  
  element.classList.add("container-sm");
  element.classList.add("p-3");
  element.classList.add("sunrise-dark")
  element.innerHTML = `<div class="d-sm-flex flex-sm-row justify-content-sm-start  d-flex flex-row justify-content-start gap-1">
  <i class="bi bi-geo-alt fs-5 text-info"></i>
  <p class="fs-5 fw-light">${city_name}</p>
</div>

<div class=" d-sm-flex flex-sm-row justify-content-sm-around align-items-sm-center  d-flex flex-row justify-content-around align-items-center gap-2 ">
  <div class="d-sm-flex flex-sm-row justify-content-sm-around align-items-sm-center  d-flex flex-row justify-content-around align-items-center gap-3">
      <i class="bi bi-brightness-high fs-1 text-warning"></i>
      <div class="d-sm-flex flex-sm-column justify-content-sm-start align-items-sm-center  d-flex flex-column justify-content-start align-items-center">
          <p>Sunrise</p>
          <p class="text-info">${sunrise_random} AM</p>
      </div>
  </div>  

  <div class="d-sm-flex flex-sm-row justify-content-sm-around align-items-sm-center d-flex flex-row justify-content-around align-items-center gap-3">
      <i class="bi bi-moon-stars fs-1 text-warning"></i>
      <div class="d-sm-flex flex-sm-column justify-content-sm-start align-items-sm-center  d-flex flex-column justify-content-start align-items-center">
          <p>Sunset</p>
          <p class="text-info">${sunset_random} PM</p>
      </div>
  </div>

  
</div>`;
const air_temp=fahrenheitToCelsius(resp.main.temp)
const adding_more=document.getElementById("add_more_data");

adding_more.classList.add("d-sm-flex");
adding_more.classList.add("flex-sm-column");
adding_more.classList.add("justify-content-sm-around");
adding_more.classList.add("p-3");
adding_more.classList.add("rounded");
adding_more.style.backgroundColor="#ffb551"

adding_more.innerHTML=` <div class="d-sm-flex flex-sm-row justify-content-sm-around align-items-sm-center d-flex flex-row justify-content-around align-items-center gap-3">
<div class="d-sm-flex flex-sm-row justify-content-sm-around align-items-sm-center d-flex flex-row justify-content-around align-items-center gap-2">
 <i class="bi bi-wind fs-3"></i>
 <div class="fs-5">Wind</div>
 <div  class="fs-5">${resp.wind.speed}</div>
</div>
<div class="d-sm-flex flex-sm-row justify-content-sm-around align-items-sm-start d-flex flex-row justify-content-around align-items-start gap-2">
 <i class="bi bi-geo-alt fs-5"></i>
 <div  class="fs-5 fw-bold">${city_name}</div>
</div>
</div>

<div class="d-sm-flex flex-sm-row justify-content-sm-around align-items-sm-center d-flex flex-row justify-content-around align-items-center">
 <div class="d-sm-flex flex-sm-row justify-content-sm-around align-items-sm-center d-flex flex-row justify-content-around align-items-center gap-2">
     <i class="bi bi-droplet fs-3"></i>
  <div class="fs-5">Hum</div>
  <div class="fs-5">${resp.main.humidity}</div>
 </div>
 
  
  <div  class="fs-1 fw-bold">${air_temp}<sup>.</sup></div>
 
</div>`
}

async function currentWeather() {
  const root = document.getElementById("rootdiv");
  document.getElementById("icon").innerHTML = "<img src='./assets/error_weather.webp' width='30%'/>";
  document.getElementById("current_temp").innerHTML = "N/A";
  document.getElementById("temp_name").innerHTML = "N/A";
  document.getElementById("windSpeed").innerHTML = "N/A";
  document.getElementById("humidity").innerHTML = "N/A";
  root.style.backgroundImage = "url('all.gif')";
  const current = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=11d420a5264d4e5a6b6f930c3c88204d`
  );
  const resp = await current.json();
  console.log(resp);
  document.getElementById("location_name").innerHTML = `${resp.name}`;

  let weatherIconSrc = ""; // Declaring weatherIconSrc variable

  if (resp.weather[0].main === "Clouds" || resp.weather[0].main === "Clear") {
    weatherIconSrc = "./assets/cloudy.png";
    currIcon = "./assets/cur.gif";
    root.style.color = "white";
  } else if (resp.weather[0].main === "Rain") {
    weatherIconSrc = "./assets/rainy.png";
    currIcon = "./assets/rain.gif";
    root.style.color = "white";
  } else if (resp.weather[0].main === "Snow") {
    weatherIconSrc = "./assets/snowy.png";
    currIcon = "./assets/snow.gif";
    root.style.color = "white";
  } else if (resp.weather[0].main === "Fog") {
    weatherIconSrc = "./assets/fog.png";
    currIcon = "./assets/fog.gif";
    root.style.color = "black";
  } else if (resp.weather[0].main === "Thunderstrom") {
    weatherIconSrc = "./assets/thunderstrom.png";
    currIcon = "./assets/thunderstrom.webp";
    root.style.color = "white";
  } else if (resp.weather[0].main === "Haze") {
    weatherIconSrc = "./assets/haze.png";
    root.style.color = "black";
    currIcon = "./assets/haze.gif";
  } else if (resp.weather[0].main === "Mist") {
    weatherIconSrc = "./assets/mist.png";
    currIcon = "./assets/mist.gif";
    root.style.color = "white";
  } else {
    weatherIconSrc = "./assets/sunny.png";
    currIcon = "./assets/all.gif";
    root.style.color = "white";
  }

  root.style.backgroundImage = `url('${currIcon}')`;

  document.getElementById(
    "icon"
  ).innerHTML = `<img src="${weatherIconSrc}" width="30%"/>`;
  const currtemp = fahrenheitToCelsius(resp.main.temp);
  document.getElementById("current_temp").innerHTML = `${currtemp}<sup>.</sup>`;
  document.getElementById(
    "temp_name"
  ).innerHTML = `${resp.weather[0].main}, ${resp.weather[0].description}`;
  document.getElementById("windSpeed").innerHTML = `${resp.wind.speed} km/h`;
  document.getElementById("humidity").innerHTML = `${resp.main.humidity} %`;
}

var lat_1="";
var lon_1="";
var air_pollution_city=""
async function currentWeatherByCounntry() {
  const root = document.getElementById("rootdiv");
  document.getElementById("icon").innerHTML = "<img src='./assets/error_weather.webp' width='30%'/>";
  document.getElementById("location_name").innerHTML="N/A"
  document.getElementById("current_temp").innerHTML = "N/A";
  document.getElementById("temp_name").innerHTML = "N/A";
  document.getElementById("windSpeed").innerHTML = "N/A";
  document.getElementById("humidity").innerHTML = "N/A";

  

  try {
    const current = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=11d420a5264d4e5a6b6f930c3c88204d`
    );

    if (!current.ok) {
      throw new Error('Network response was not ok');
    }

    const resp = await current.json();
    console.log("current ather");
    console.log(resp);
    lat_1=resp.coord.lat;
    lon_1=resp.coord.lon
    air_pollution_city=resp.name;
    document.getElementById("location_name").innerHTML = `${resp.name}`;

    let weatherIconSrc = ""; 
    let currIcon = "url('all.gif')"; 
    if (resp.weather[0].main === "Clouds" || resp.weather[0].main === "Clear") {
      weatherIconSrc = "./assets/cloudy.png";
      currIcon = "./assets/cur.gif";
      root.style.color = "white";
    } else if (resp.weather[0].main === "Rain") {
      weatherIconSrc = "./assets/rainy.png";
      currIcon = "./assets/rain.gif";
      root.style.color = "white";
    } else if (resp.weather[0].main === "Snow") {
      weatherIconSrc = "./assets/snowy.png";
      currIcon = "./assets/snow.gif";
      root.style.color = "white";
    } else if (resp.weather[0].main === "Fog") {
      weatherIconSrc = "./assets/fog.png";
      currIcon = "./assets/fog.gif";
      root.style.color = "black";
    } else if (resp.weather[0].main === "Thunderstrom") {
      weatherIconSrc = "./assets/thunderstrom.png";
      currIcon = "./assets/thunderstrom.webp";
      root.style.color = "white";
    } else if (resp.weather[0].main === "Haze") {
      weatherIconSrc = "./assets/haze.png";
      root.style.color = "black";
      currIcon = "./assets/haze.gif";
    } else if (resp.weather[0].main === "Mist") {
      weatherIconSrc = "./assets/mist.png";
      currIcon = "./assets/mist.gif";
      root.style.color = "white";
    } else {
      weatherIconSrc = "./assets/sunny.png";
      root.style.color = "white";
    }

    root.style.backgroundImage = `url('${currIcon}')`;

    document.getElementById(
      "icon"
    ).innerHTML = `<img src="${weatherIconSrc}" width="30%"/>`;
    const currtemp = fahrenheitToCelsius(resp.main.temp);
    document.getElementById("current_temp").innerHTML = `${currtemp}<sup>.</sup>`;
    document.getElementById(
      "temp_name"
    ).innerHTML = `${resp.weather[0].main}, ${resp.weather[0].description}`;
    document.getElementById("windSpeed").innerHTML = `${resp.wind.speed} km/h`;
    document.getElementById("humidity").innerHTML = `${resp.main.humidity} %`;
  } catch (error) {
    root.style.color="#EAD8C0";
    root.style.backdropFilter = "blur(10px)";
    root.style.backgroundImage = "url('./assets/all.webp')";
  }

  airpollutionByCountry();
  sunriseAndsunsetbycountry();
}

async function airpollutionByCountry() {
  const resp = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat_1}&lon=${lon_1}&appid=11d420a5264d4e5a6b6f930c3c88204d`
  );
  
  const res = await resp.json();
  console.log("ddfdfdsf")
  console.log(res);

  console.log(res.list[0].main.aqi);
  const aqi = res.list[0].main.aqi;
  document.getElementById("country_name").innerHTML = `${air_pollution_city}`;

  if (aqi >= 0 && aqi <= 50) {
    document.getElementById("air_type").innerHTML = "Good";
    document.getElementById("air_info").innerHTML = `Clear skies, stride-wise`;
  } else if (aqi > 50 && aqi <= 100) {
    document.getElementById("air_type").innerHTML = "Moderate";
    document.getElementById(
      "air_info"
    ).innerHTML = `Balanced air, walk with care`;
  } else if (aqi > 100 && aqi <= 150) {
    document.getElementById("air_type").innerHTML = "Unhealthy";
    document.getElementById(
      "air_info"
    ).innerHTML = `Caution in air, tread with care`;
  } else {
    document.getElementById("air_type").innerHTML = "Hazardous";
    document.getElementById(
      "air_info"
    ).innerHTML = `Air's a concern, indoor's your turn.`;
  }

  const pm2 = res.list[0].components.pm2_5;
  document.getElementById("pm2_value").innerHTML = `${pm2}`;

  const pm10 = res.list[0].components.pm10;
  document.getElementById("pm10_value").innerHTML = `${pm10}`;

  const so2 = res.list[0].components.so2;
  document.getElementById("so2_value").innerHTML = `${so2}`;

  const no2 = res.list[0].components.no2;
  document.getElementById("no2_value").innerHTML = `${no2}`;

  const o3 = res.list[0].components.o3;
  document.getElementById("o3_value").innerHTML = `${o3}`;

  const co = res.list[0].components.co;
  document.getElementById("co_value").innerHTML = `${co}`;
}



async function sunriseAndsunsetbycountry() {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat_1}&lon=${lon_1}&appid=11d420a5264d4e5a6b6f930c3c88204d`
  );
  const res = await data.json();
  console.log("search wala data sunrise ka")
  console.log(res);
  document.getElementById("country_name1").innerHTML = `${air_pollution_city}`;
  const sunrise = timeConverter(res.sys.sunrise);
  document.getElementById("sunrise_time").innerHTML = `${sunrise} AM`;

  const sunset = timeConverter(res.sys.sunset);
  document.getElementById("sunset_time").innerHTML = `${sunset} PM`;

  
}


var count = 0;

async function getNews() {
  const req = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=c1c1d08d074647de9e5e28187e608822");
  const resp = await req.json();
  return resp.articles;
}




async function displayNews() {
  const title = document.getElementById("news_title"); // Get reference to title element
  const des = document.getElementById("news_description"); // Get reference to description element
  const news = await getNews();
  const newsCount = news.length;

  const carouselInterval = setInterval(() => {
    title.innerHTML = `${news[count].title}`;
    if(news[count].description==null){
      des.innerHTML = `. . . `;
    }
    else{
      des.innerHTML = `${news[count].description}`;
    }
   
    count++;
    if (count === newsCount) {
      clearInterval(carouselInterval);
      count = 0;
    }
  }, 5000);
}

displayNews();


