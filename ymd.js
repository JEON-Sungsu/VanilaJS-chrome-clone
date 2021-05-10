const globalDay = document.querySelector(".js-ymh"),
    dayContainer = globalDay.querySelector("span");


function getDay() {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDate();
    dayContainer.innerHTML = `${year}-${month < 10 ? `0${1+ month}` : month}-${day < 10 ? `0${day}`:day}`
};

getDay();
