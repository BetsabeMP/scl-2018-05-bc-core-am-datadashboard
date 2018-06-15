// funcion para obtener paises desde API

window.callCountry = () => {
  return fetch('https://laboratoria-la-staging.firebaseapp.com/campuses').then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('La llamada a la API falló');
    }
  }).then((respuestaJson) => {
    respuestaJson;
    return respuestaJson;
  }).catch((err) => {
    console.error(err);
  });
};

window.computeUsersStats = (users, progress, courses) => {

};

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};

// usando XHR
// const getDatos = () => {
//   const datosRequest = new XMLHttpRequest();
//   datosRequest.open('GET', 'https://laboratoria-la-staging.firebaseapp.com/campuses');
//   datosRequest.onload = addDatos;
//   datosRequest.onerror = handleError;
//   datosRequest.send();
// };

// const handleError = () => {
//   console.log('Se ha presentado un error');
// };

// function addDatos() {
//   const data = JSON.parse(this.responseText);
//   // console.log(data);
//   // const countryArr = data.map((country) => {
//   //   return country.name;
//   // });
//   // console.log(countryArr);
//   window.writeCountry(data);
// };
// getDatos();