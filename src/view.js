// funcion que escribe los paises en pantalla

window.writeCountry = (countries) => {
  let countryHTML = '';
  for (let country of countries) {
    countryHTML = countryHTML + `<div id="pais1">
     <p id="txt1">${country.name}</p>
     <button id="btnUno">CONTINUAR</button>
     </div>`;
  }
  let divCountry = document.getElementById('counter');
  divCountry.innerHTML = countryHTML;
};

//   console.log(countries);
//   const countryArr = countries.map((country) => {
//     return country.name;
//   });
//   let countryHTML = '';
//   countryArr.forEach(element => {
//     countryHTML = countryHTML + `<div id="pais1">
// <p id="txt1">${element}</p>
// <button id="btnUno">CONTINUAR</button>
// </div>`;
//   });
//   let divCountry = document.getElementById('counter');
//   divCountry.innerHTML = countryHTML;