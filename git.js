console.log("Script git.js cargando"); //Verificación de que el archivo se esta cargando

const API_URL = 'https://api.gameofthronesquotes.xyz/v1/random';

function fetchQuote(){
    console.log("Intentando tener una cita..."); //Verificando que se llame a la función

    fetch (API_URL)
        .then(response=>{
            console.log("Respuesta recibida", response); //Mostrar la respuesta en la consola
            if (!response.ok){
                throw new Error(`Error en la respuesta: ${response.status}`);
            }
            return response.json();
        })
        .then (data =>{
            console.log("Datos obtenidos: ", data); //Mostrar datos obtenidos en consola
            displayQuote(data);
        })
        .catch(error=>console.error('Error al obtener la cita: ',error));   
}

function displayQuote(quoteData){
    const container = document.getElementById('games-container');
    container.innerHTML =`
    <p><strong>${quoteData.character.name}:</strong> "${quoteData.sentence}"</p>
    `;
    console.log("Cita mostrada correctamente");
}
//Llamar a la funcion al cargar la página
fetchQuote();