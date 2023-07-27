let api_key = '74784b401ca894a39daf4dba3f73d419'
url_base = 'https://api.openweathermap.org/data/2.5/weather'
let difkelvin = 273

document.querySelector('#botonBusqueda').addEventListener('click',()=>{
    const ciudad = document.querySelector('#ciudadEntrada').value
    if(ciudad){
        fetchDatosCiudad(ciudad)
    }
})
function fetchDatosCiudad(ciudad){
    fetch(`${url_base}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    
       const divDatosClima = document.querySelector('#datosClima')
       divDatosClima.innerHTML = ''

       const ciudadNombre = data.name
       const temperatura = data.main.temp
       const descripcion = data.weather[0].description

       const ciudadTitulo = document.createElement('h2')
       ciudadTitulo.textContent = ciudadNombre

       const ciudadTemperatura = document.createElement('h2')
       ciudadTemperatura.textContent = `la temperatura es ${Math.floor(temperatura - difkelvin)} °Celsius`

       const ciudadDescripcion = document.createElement('p')
       ciudadDescripcion.textContent = `La descripcion meteorologica es: ${descripcion}`

       divDatosClima.appendChild(ciudadTitulo)
       divDatosClima.appendChild(ciudadTemperatura)
       divDatosClima.appendChild(ciudadDescripcion)

}





