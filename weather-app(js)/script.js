const apiKey="e57e8e41f26018c1572a5e61efbc2c98";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =  document.querySelector(".search input");
const searchBtn =  document.querySelector(".search button");


async function fetchApi(city) {
    let result = await fetch(
        apiUrl + city + `&appid=${apiKey}`
      );
    console.log(result);
    let finalData = await result.json();
    console.log(finalData);

   

    document.querySelector(".temp").innerHTML=Math.round(finalData.main.temp) + "°C";
    document.querySelector(".city").innerHTML=finalData.name;
    document.querySelector(".humidity").innerHTML=finalData.main.humidity + "%";
    document.querySelector(".wind").innerHTML=finalData.wind.speed + "km/h";
   let weather= document.querySelector(".weather-icon");


    if(finalData.weather[0].main=='Clouds'){
       weather.src='images/clouds.png';
    }
    else if(finalData.weather[0].main=='Clear'){
        weather.src='images/clear.png';
     }
     else if(finalData.weather[0].main=='Rain'){
        weather.src='images/rain.png';
     }
     else if(finalData.weather[0].main=='Drizzle'){
        weather.src='images/drizzle.png';
     }
     else if(finalData.weather[0].main=='Mist'){
        weather.src='images/mist.png';
     }
    

}
  searchBtn.addEventListener("click", ()=>{
    fetchApi(searchBox.value);
  })
  
 
  