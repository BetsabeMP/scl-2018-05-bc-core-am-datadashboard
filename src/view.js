// función que escribe los paises en pantalla
window.writeCountry = (countries) => {
  let countryHTML = '';
  for (let country of countries) {
    countryHTML = countryHTML + `<div class="pais">
     <p class="txt1">${country.name}</p>
     <button id="${country.id}">CONTINUAR</button>
     </div>`;
  }
  let divCountry = document.getElementById('counter');
  divCountry.innerHTML = countryHTML;
};

// función que escribe cohort en pantalla
window.writeCohort = (cohorts) => {
  let cohortHTML = '';
  for (let cohort of cohorts) {
    cohortHTML = cohortHTML + `<div class="cohort">
     <p class="txt2">${cohort.id}</p>
     <button id="${cohort.id}">CONTINUAR</button>
     </div>`;
  }
  let divCohort = document.getElementById('counter');
  divCohort.innerHTML = cohortHTML;
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