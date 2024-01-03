
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
      <p id="state" class="text-light fs-4">${el.day.condition.text }</p>
      <div class="icons">
        <i class="fa-solid fa-wind "> 20 k / h r</i>
        <i class="fa-solid fa-umbrella"> 20% </i>
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



// async function search(a) {
//     let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
//     if (t.ok && 400 != t.status) {
//         let a = await t.json();
//         displayCurrent(a.location, a.current),
//         displayAnother(a.forecast.forecastday)
//     }
// }
// document.getElementById("search").addEventListener("keyup", a=>{
//     search(a.target.value)
// }
// );
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// function displayCurrent(a, t) {
//     if (null != t) {
//         var e = new Date(t.last_updated.replace(" ", "T"));
//         let n = `<div class="today forecast">\n 
//            <div class="forecast-header"  id="today">\n   
//             <div class="day">${days[e.getDay()]}</div>\n 
//                <div class=" date">${e.getDate() + monthNames[e.getMonth()]}</div>\n  
//                  </div> \x3c!-- .forecast-header --\x3e\n   
//                   <div class="forecast-content" id="current">\n  
//           <div class="location">${a.name}</div>\n  
//             <div class="degree">\n     
//                <div class="num">${t.temp_c}<sup>o</sup>C</div>\n      \n     
//                   <div class="forecast-icon">\n        
//                       <img src="https:${t.condition.icon}" alt="" width=90>\n     
//                          </div>\t\n    \n    </div>\n 
//                             <div class="custom">${t.condition.text}</div>\n  
//                               <span><img src="images/icon-umberella.png" alt="">20%</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-wind.png" alt="">18km/h</span>\n\t\t\t\t\t\t\t\t<span><img src="images/icon-compass.png" alt="">East</span>\n   
//                                </div>\n</div>`;
//         document.getElementById("forecast").innerHTML = n
//     }
// }