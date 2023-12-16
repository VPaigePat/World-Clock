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