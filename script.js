let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
var iconfile ;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click' ,(e)=>
{
  e.preventDefault();
  getWeather(searchInput.value);
  searchInput.value='';
});

const getWeather=async(city)=>
{
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55c43918c4094078d89403887083a4d9`,

      {mode: 'cors'}
    );


    const  weatherData=await response.json();
    console.log(weatherData);
    const{name}=weatherData;
    const{feels_like}=weatherData.main;
    const{id,main}=weatherData.weather[0];
    loc.textContent=name;
    climate.textContent=main;
    tempvalue.textContent=Math.round(feels_like-273);
    if(id<300 && id>200)
    {
      tempicon.src="https://cdn2.iconfinder.com/data/icons/weather-collection-1/512/thunderstorm-ranny-128.png"
    }
    else if(id<400 && id>300)
    {
      tempicon.src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-128.png"
    }
    else if(id<600 && id>500)
    {
      tempicon.src="https://cdn2.iconfinder.com/data/icons/weather-collection-1/512/rainnyday-01-128.png"
    }
    else if(id<700 && id>600)
    {
      tempicon.src="https://cdn2.iconfinder.com/data/icons/season-6/340/season_winter_snow_christmas_snowflake_snowfall-128.png"
    }
    else if(id<800 && id>700)
    {
      tempicon.src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-128.png"
    }
    else if(id==800)
    {
      tempicon.src="https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-clear-128.png"
    }
  }
  catch(error)
  {
    alert('city not found');
  }
};

window.addEventListener("load" ,()=> {

  let long;
  let lat;
  if(navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition((position)=>
{


    long= position.coords.longitude;
    lat=position.coords.latitude;

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=55c43918c4094078d89403887083a4d9`;
    fetch(api).then((response)=>{

      return response.json();
    })
    .then (data =>
    {
      const{name} = data;
      const{feels_like} = data.main;
      const{id,main}=data.weather[0];

      loc.textContent=name;
      climate.textContent=main;
      tempvalue.textContent=Math.round(feels_like-273);
      if(id<300 && id>200)
      {
        tempicon.src="https://cdn2.iconfinder.com/data/icons/weather-collection-1/512/thunderstorm-ranny-128.png"
      }
      else if(id<400 && id>300)
      {
        tempicon.src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-128.png"
      }
      else if(id<600 && id>500)
      {
        tempicon.src="https://cdn2.iconfinder.com/data/icons/weather-collection-1/512/rainnyday-01-128.png"
      }
      else if(id<700 && id>600)
      {
        tempicon.src="https://cdn2.iconfinder.com/data/icons/season-6/340/season_winter_snow_christmas_snowflake_snowfall-128.png"
      }
      else if(id<800 && id>700)
      {
        tempicon.src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-128.png"
      }
      else if(id==800)
      {
        tempicon.src="https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-clear-128.png"
      }
      console.log(data);
    })
  }
)}
})
