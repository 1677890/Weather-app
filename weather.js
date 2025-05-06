const apiKey = "944f212fe220aeef454d46411004da2a" ;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;

const searchBox = document.querySelector( " .search input" );
const searchBtn = document.querySelector( " .search button" );
const weatherIcon = document.querySelector ( " .weather-icon");
async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	
	if(response.status == 404){
		document.querySelector(".error ").style.display = "block";
		document.querySelector(".weather").style.display = "none";
}else{
	var data = await response.json();
	
	console.log(data);
	
	document.querySelector( " .city" ).innerHTML = data.name;
	document.querySelector( " .kelv" ).innerHTML = Math.round( data.main.temp)  +  "°c";
	document.querySelector( " .humidity" ).innerHTML = data.main.humidity  +  "%";
	document.querySelector( " .wind" ).innerHTML = data.wind.speed  +  " km/hr";	
	
	if(data.weather[0].main == "Clouds"){
		weatherIcon.src = "Sun.jpg";
}	
    else if(data.weather[0].main == "Clear"){
    	weatherIcon.src = "Clear.jpg";
}
else if(data.weather[0].main == "Rain"){
    	weatherIcon.src = "rain.jpg";
}
else if(data.weather[0].main == "Drizzle"){
    	weatherIcon.src = "drizzle.jpg";
}
else if(data.weather[0].main == "Mist"){
    	weatherIcon.src = "Mist.jpg";
}
   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error ").style.display = "none";
}


}

	
searchBtn.addEventListener( "click" , (  )=>{
	checkWeather(searchBox.value);
	
})




