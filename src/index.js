function updateTime(){

let londonElement = document.querySelector("#London");
let londonTimeElement = londonElement.querySelector(".time");
let londonDateElement = londonElement.querySelector(".date");
londonTimeZone = moment().tz("Europe/London");

londonTimeElement.innerHTML = londonTimeZone.format("HH:mm:ss")
londonDateElement.innerHTML = londonTimeZone.format("MMMM Do YYYY")


let tokyoElement = document.querySelector("#Tokyo");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoDateElement = tokyoElement.querySelector(".date");
tokyoTimeZone = moment().tz("Asia/Tokyo");

tokyoTimeElement.innerHTML = tokyoTimeZone.format("HH:mm:ss")
tokyoDateElement.innerHTML = tokyoTimeZone.format("MMMM Do YYYY")

}

setInterval(updateTime, 1000);

function updateCity(event){
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment.tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM do YYYY")}</div>
        </div>
        <div class="time"> ${cityTime.format("HH:mm:ss")}</div>
      </div>
      
      `
    

}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);