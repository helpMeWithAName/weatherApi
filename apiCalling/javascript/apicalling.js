// let btn = document.getElementsByClassName("dropdown-content");
// let btn1 = btn[0];
// let dropTable = document.getElementById("table");

// function tableRemove() {
// dropTable.style.display="none"
// };

// btn.addEventListener("click", tableRemove);



if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    console.log(`Latitude: ${lat}`);
    console.log(`Longitude: ${lon}`);
    
  fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,{
    method:`GET`
  })
    .then((response) => response.json())
    .then((data) =>  {
      // data form the api about ski 
    console.log(data)
    document.getElementById("title").innerHTML=`Your location`
    document.getElementById("windspeed").innerHTML=`${data.properties.timeseries[0].data.instant.details.wind_speed}m/s`
    document.getElementById("regn").innerHTML=`${data.properties.timeseries[0].data.next_1_hours.details.precipitation_amount}mm`
    document.getElementById("temp").innerHTML=`${data.properties.timeseries[0].data.instant.details.air_temperature}°`

    // for (let i = 18; i < 42; i++) {
    //   let temps = document.getElementsByClassName("Temp");
    //   for (let j = 0; j < temps.length; j++) {
    //     temps[j].innerHTML = data.properties.timeseries[i+j].data.instant.details.air_temperature;
    //     console.log(data.properties.timeseries[i+j].data.instant.details.air_temperature)
    //   }
    // }
    
    } );
  
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
    // data form the api about ski 
  console.log(data)
  document.getElementById("title").innerHTML=`Ski`
  document.getElementById("windspeed").innerHTML=`${data.properties.timeseries[0].data.instant.details.wind_speed}m/s`
  document.getElementById("regn").innerHTML=`${data.properties.timeseries[0].data.next_1_hours.details.precipitation_amount}mm`
  document.getElementById("temp").innerHTML=`${data.properties.timeseries[0].data.instant.details.air_temperature}°`

  for (let i =18; i < 42; i++){
    console.error(data.properties.timeseries[i].data.instant.details.air_temperature)
    console.log(i)
  }

  } );
}

function yrVerOslo(){
  fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.92097904902651&lon=10.750092694217832`,{
  method:`GET`
})
  .then((response) => response.json())
  .then((data) =>  {
        // data form the api about Oslo
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
        // data form the api about Bergen
  console.log(data)
  document.getElementById("title").innerHTML=`Bergen`
  document.getElementById("windspeed").innerHTML=`${data.properties.timeseries[0].data.instant.details.wind_speed}m/s`
  document.getElementById("regn").innerHTML=`${data.properties.timeseries[0].data.next_1_hours.details.precipitation_amount}mm`
  document.getElementById("temp").innerHTML=`${data.properties.timeseries[0].data.instant.details.air_temperature}°`

  } );
}


let dropdowns = document.getElementsByClassName("dropdown");

for (let i = 0; i < dropdowns.length; i++) {
  let dropdown = dropdowns[i];
  let button = dropdown.getElementsByClassName("dropbtn")[0];
  button.onclick = function() {
    dropdown.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


let toggleBtn = document.getElementById('toggle-btn');
let table = document.getElementById('table');

// Get the state from localStorage, or set it to 'block' if it's not set
let state = localStorage.getItem('tableState') || 'block';
table.style.display = state;
if (state === 'none') {
  toggleBtn.style.display = 'block';
}

toggleBtn.addEventListener('click', function() {
  if (table.style.display === 'none') {
    table.style.display = 'block';
    toggleBtn.style.display = 'none';
    localStorage.setItem('tableState', 'block');
  } else {
    table.style.display = 'none';
    toggleBtn.style.display = 'block';
    localStorage.setItem('tableState', 'none');
  }
});
