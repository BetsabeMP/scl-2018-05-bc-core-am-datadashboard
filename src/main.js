const buttonCountry = document.getElementById('btn');

buttonCountry.addEventListener('click', () => {

  fetch('https://laboratoria-la-staging.firebaseapp.com/campuses').then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('La llamada a la API falló');
    }
  }).then((respuestaJson) => {
    console.log('esta es la data:', respuestaJson);
    const namesRespuesta = respuestaJson.map((respuestaJson) => {
      return respuestaJson.name;
    });
    console.log('esta es el name:', namesRespuesta);
  }).catch((err) => {
    console.error(err);
  });
});

  /* fetch('https://laboratoria-la-staging.firebaseapp.com/campuses', {
    method: 'get'
  }).then(function (respuesta) {
    console.log('esta es el resultado de la comunicacion con la api:', respuesta);
    return respuesta.json();
  }).then((data) => {
    console.info('data:', data);
  })
    .catch(function (err) {
      console.error(err);
    });
});*/

/* buttonCountry.addEventListener('click', (e) => {
  e.preventDefault();
  getDatos();
});

const getDatos = () => {
  const datosRequest = new XMLHttpRequest();
  datosRequest.open('GET', 'https://laboratoria-la-staging.firebaseapp.com/campuses');
  datosRequest.onload = addDatos;
  datosRequest.onerror = handleError;
  datosRequest.send();
};

const handleError = () => {
  console.log('Se ha presentado un error');
};

function addDatos() {
  const data = JSON.parse(this.responseText);
  const response = data.response;
  console.log(response);
}


fetch('https://laboratoria-la-staging.firebaseapp.com/campuses').then((response) => {
    if (response.status !== 200) {
      return response.json();
    } else {
      throw new Error('La llamada a la API falló');
    }
  }).then((respuestaJson) => {
    console.log('data = ', respuestaJson);
  }).catch((error) => {
    console.error(Error);
  });*/
