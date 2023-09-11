

// Función para obtener y mostrar el clima del día:
function getPronostico() {

    let latitud = document.getElementById("latitud").value;
    let longitud = document.getElementById("longitud").value;
    
    //API del clima utilizada: 
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=a5ead980e253bb994421c7981b5b287d`;
    
    fetch(api)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperatura').textContent = data.main.temp; //Establezco la temperatura
            document.getElementById('descripcion').textContent = data.weather[0].description; //Descripcion
            document.getElementById('humedad').textContent =  data.main.humidity; //titulo
            document.getElementById('viento').textContent = data.wind.speed; //fecha
                })
        .catch(error => {
            console.error('Error al obtener el pronóstico:', error); //Lo que aparece si no la encuentra
        });
}

// Asociar la función al botón de obtener imagen del espacio
document.getElementById('boton').addEventListener('click', getPronostico);
