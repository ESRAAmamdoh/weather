
function display(respose){
    console.log(respose);
    let days=respose.forecast.forecastday
    var cartna=``
   days.forEach((el,i)=>{
    cartna+=`
    <div class="col-lg-4 my-3">
         <div class="card" >
    <div class="header">
    <p>${new Date(el.date).toLocaleString('default', { weekday: 'long' })}</p>
    <p>${new Date(el.date).toLocaleString('default', {day:'numeric' , month: 'long' })}</p>
  </div>
  <div class="body-card">

      <p id="country">   ${respose.location.name }</p>

      <div class="stat-icon">
        <p id="dgree">${el.day.maxtemp_c } <sup>o</sup>c</p>
        <img src="${el.day.condition.icon}" width=90 height=100 alt="">
      </div>
      <p  class="text-light fs-5">${el.day.mintemp_c} <sup>o</sup>c</p>
      <p id="state" class="text-light fs-4">${el.day.condition.text }</p>
      <div class="icons">
        <i class="fa-solid fa-wind "> ${el.day.maxwind_kph}  k / h r</i>
        <i class="fa-solid fa-umbrella"> ${el.day.daily_chance_of_rain} % </i>
        <i class="fa-regular fa-compass"> East</i>
      </div>
    
    
      </div>
      </div>
      </div>
    ` 
   })

  
   console.log(cartna)
    document.getElementById('card').innerHTML=cartna
}

async function getWeather(a){
    // var data= await fetch('http://api.weatherapi.com/v1/forecast.json?key=5c8e0891492643d7943165349240101&q=london&days=3')

    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=5c8e0891492643d7943165349240101&q=${a}&days=3`)
  .then(function (response) {
    // handle success
    display(response.data);
    console.log(response);
  })
     
    
}
document.getElementById("search").addEventListener("keyup", a=>{
  getWeather(a.target.value)
}
);

getWeather("el wasta");



