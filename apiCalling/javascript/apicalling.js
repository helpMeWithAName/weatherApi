

if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = `Latitude: ${position.coords.latitude}`
    let lon = `Longitude: ${position.coords.longitude}`
    console.log(lat);
    console.log(lon);
  });
} else {
  /* geolocation IS NOT available */
  console.log("Geolocation is not available.");
}

function yrVerSki(){
fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.72127721829235&lon=10.83517787516473',{
  method:`GET`
})
  .then((response) => response.json())
  .then((data) =>  {
  console.log(data)
  document.getElementById("title").innerHTML=`Ski`
  document.getElementById("windspeed").innerHTML=`${data.properties.timeseries[0].data.instant.details.wind_speed}m/s`
  document.getElementById("regn").innerHTML=`${data.properties.timeseries[0].data.next_1_hours.details.precipitation_amount}mm`
  document.getElementById("temp").innerHTML=`${data.properties.timeseries[0].data.instant.details.air_temperature}°`

  } );
}

function yrVerOslo(){
  fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.92097904902651&lon=10.750092694217832`,{
  method:`GET`
})
  .then((response) => response.json())
  .then((data) =>  {
  console.log(data)
  document.getElementById("title").innerHTML="Oslo"
  document.getElementById("windspeed").innerHTML=`${data.properties.timeseries[0].data.instant.details.wind_speed}m/s`
  document.getElementById("regn").innerHTML=`${data.properties.timeseries[0].data.next_1_hours.details.precipitation_amount}mm`
  document.getElementById("temp").innerHTML=`${data.properties.timeseries[0].data.instant.details.air_temperature}°`

  } );
}

function yrVerBergen(){
  fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.41035622161377&lon=5.313795518304067`,{
  method:`GET`
})
  .then((response) => response.json())
  .then((data) =>  {
  console.log(data)
  document.getElementById("title").innerHTML=`Bergen`
  document.getElementById("windspeed").innerHTML=`${data.properties.timeseries[0].data.instant.details.wind_speed}m/s`
  document.getElementById("regn").innerHTML=`${data.properties.timeseries[0].data.next_1_hours.details.precipitation_amount}mm`
  document.getElementById("temp").innerHTML=`${data.properties.timeseries[0].data.instant.details.air_temperature}°`

  } );
}




function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
