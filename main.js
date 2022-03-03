let mesto = document.getElementById('mesto');
let grad = document.getElementById('grad');
let could = document.getElementById('could');
let speeds = document.getElementById('speed');
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let img = document.getElementsByClassName('img')[0]
let h2 = document.getElementsByClassName('h2')[0]
const weather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e2546b4057f380b82447e55d4f7b52d`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            displayWeather(data)
        })
        .catch(err=>{
            h2.innerText=`???`,
            mesto.style.display = `none`,
            grad.style.display = 'none',
            could.style.display ='none',
            speeds.style.display ='none',
            inp.value = '',
            location.reload()
        }
        )
}

const displayWeather = (data) => {
    mesto.innerText = `погода в ${data.name}`
    grad.innerText = `${Math.round(data.main.temp-273)+'°'}`
    could.innerText = `Влажность: ${data.main.humidity}`
    speeds.innerText = `Скоростьветра:${data.wind.speed}`
    img.innerHTML = `<img src = "http://openweathermap.org/img/w/${data.weather[0].icon}.png">`

}

const search = () => {
    weather(inp.value)
}

btn.onclick = () => {
    search()
    // btn.value = ''
}
function random(x, y) {
    return x + Math.floor(Math.random(x) * y)
}


let date = new Date
let month = date.getMonth() + 1
let hour = date.getHours()

// const month_year = [12, 1, 2]

// for (let i = 0; i < month_year.length; i++) {
//     if (month === month_year[i]) {
//         winter()
//     }
// }

// function winter() {
//     for (let j = 0; j < 100; j++) {
//         document.body.innerHTML += `
//         <div class="animation_winter">
//             <img src="http://www.downloadclipart.net/medium/38025-snowflake-images.png" alt="" class="winter">
//         </div>`
//         let winter = document.getElementsByClassName('animation_winter')
//         winter[j].style.top = `${random(0, 100)}vh`
//         winter[j].style.left = `${random(0, 100)}%`
//         winter[j].style.width = `${random(3, 10)}px`
//         winter[j].style.height = `${random(3, 10)}px`
//         winter[j].classList.add('win')
//     }

// }

let day = document.getElementsByClassName('day')[0]
let night = document.getElementsByClassName('night')[0]

if (hour > 18 || hour < 6) {
    day.style.display = 'none'
    night.style.display = 'block'
    
} else {
    day.style.display = 'block'
    night.style.display = 'none'
}
console.log(date.getMinutes())