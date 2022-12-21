const submitForm = document.querySelector("form");
const serachInput = document.querySelector("#search");
const weather = document.querySelector("#weather")

const API_Key = `3265874a2c77ae4a04bb96236a642d2f`


const getWeather = async (city)=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric` 
    const response = await fetch(URL)
    // console.log(response)
    const data = await response.json();
    // console.log(data)
    return showWeather(data)
}
const showWeather = (data)=>{
    // console.log(data)
    if(data.cod>=200 & data.cod<=300){
        weather.innerHTML = `
        <div class="image">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt ="">
        </div>
        <div class="content">
        <h2>${data.main.temp} &#8451</h2>
        <h4>${data.weather[0].main}</h4>
        </div>`
    }
    else{
        weather.innerHTML = `
        <div class="content">
            <h1 style="font-size: 3rem">City Not Found</h1>
        </div>`
    }
}
submitForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    getWeather(serachInput.value);
})